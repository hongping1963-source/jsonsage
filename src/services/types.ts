export interface NucleiScanOptions {
  target: string;
  templates?: string[];
  severity?: ('info' | 'low' | 'medium' | 'high' | 'critical')[];
  outputFormat?: 'json' | 'yaml' | 'text';
  outputFile?: string;
  customSchema?: string;
}

export interface ValidationResult {
  id: string;
  info: {
    name: string;
    severity: string;
    description: string;
    tags: string[];
  };
  matched: string;
  timestamp: string;
  template: string;
  type: string;
  matcher_name: string;
  extracted_results?: string[];
  curl_command?: string;
}
