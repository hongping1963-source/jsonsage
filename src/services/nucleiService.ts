import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const execAsync = promisify(exec);

interface NucleiScanOptions {
  target: string;
  templates?: string[];
  severity?: string[];
  outputFormat?: 'json' | 'yaml' | 'text';
  outputFile?: string;
}

export class NucleiService {
  private nucleiBinaryPath: string;
  private templatesPath: string;

  constructor(nucleiBinaryPath: string, templatesPath: string) {
    this.nucleiBinaryPath = nucleiBinaryPath;
    this.templatesPath = templatesPath;
  }

  /**
   * Run a Nuclei scan with specified options
   */
  async runScan(options: NucleiScanOptions): Promise<string> {
    const args: string[] = ['-target', options.target];

    if (options.templates) {
      args.push('-t', options.templates.join(','));
    }

    if (options.severity) {
      args.push('-severity', options.severity.join(','));
    }

    if (options.outputFormat) {
      args.push('-o', options.outputFile || 'nuclei-results.' + options.outputFormat);
      args.push('-json'); // Always generate JSON for parsing
    }

    try {
      const { stdout, stderr } = await execAsync(`${this.nucleiBinaryPath} ${args.join(' ')}`);
      if (stderr) {
        console.error('Nuclei scan warning:', stderr);
      }
      return stdout;
    } catch (error) {
      console.error('Nuclei scan error:', error);
      throw error;
    }
  }

  /**
   * Get available Nuclei templates
   */
  async getTemplates(): Promise<string[]> {
    try {
      const templates = await fs.promises.readdir(this.templatesPath);
      return templates.filter(t => t.endsWith('.yaml'));
    } catch (error) {
      console.error('Error reading templates:', error);
      throw error;
    }
  }

  /**
   * Parse Nuclei scan results
   */
  parseScanResults(results: string): any {
    try {
      return JSON.parse(results);
    } catch (error) {
      console.error('Error parsing scan results:', error);
      throw error;
    }
  }

  /**
   * Create a custom Nuclei template
   */
  async createTemplate(templateName: string, content: string): Promise<void> {
    const templatePath = path.join(this.templatesPath, `${templateName}.yaml`);
    try {
      await fs.promises.writeFile(templatePath, content);
    } catch (error) {
      console.error('Error creating template:', error);
      throw error;
    }
  }
}
