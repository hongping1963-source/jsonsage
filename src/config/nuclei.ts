export const nucleiConfig = {
  // Nuclei binary path - this should be configured based on the installation
  binaryPath: process.env.NUCLEI_PATH || 'nuclei',
  
  // Templates directory path
  templatesPath: process.env.NUCLEI_TEMPLATES_PATH || './nuclei-templates',
  
  // Default scan options
  defaultScanOptions: {
    severity: ['low', 'medium', 'high', 'critical'] as const,
    outputFormat: 'json' as const,
    outputFile: 'scan-results.json',
  },
  
  // Template categories
  templateCategories: {
    schema: 'schema-validation',
    array: 'array-validation',
    type: 'type-validation',
    security: 'security-validation',
  },

  // Validation severities
  severities: {
    info: 'info',
    low: 'low',
    medium: 'medium',
    high: 'high',
    critical: 'critical',
  } as const,
};
