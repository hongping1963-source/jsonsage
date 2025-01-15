export const nucleiConfig = {
  // Nuclei binary path - this should be configured based on the installation
  binaryPath: process.env.NUCLEI_PATH || 'nuclei',
  
  // Templates directory path
  templatesPath: process.env.NUCLEI_TEMPLATES_PATH || './nuclei-templates',
  
  // Default scan options
  defaultScanOptions: {
    severity: ['high', 'critical'],
    outputFormat: 'json' as const,
    outputFile: 'scan-results.json',
  },
  
  // Template categories for JSON validation
  templateCategories: {
    schema: 'schema-validation',
    structure: 'structure-validation',
    security: 'security-checks',
    performance: 'performance-checks',
  },
};
