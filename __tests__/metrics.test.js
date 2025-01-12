const MetricsCollector = require('../src/utils/metrics');

describe('MetricsCollector', () => {
  let metrics;

  beforeEach(() => {
    metrics = new MetricsCollector();
  });

  test('should initialize with zero values', () => {
    const report = metrics.getReport();
    expect(report.processedFiles).toBe(0);
    expect(report.errors).toBe(0);
    expect(report.processingTime).toBe(0);
    expect(report.lastProcessed).toBeNull();
  });

  test('should record processing', () => {
    metrics.recordProcessing(100);
    const report = metrics.getReport();
    
    expect(report.processedFiles).toBe(1);
    expect(report.processingTime).toBe(100);
    expect(report.averageProcessingTime).toBe(100);
    expect(report.lastProcessed).toBeInstanceOf(Date);
  });

  test('should record errors', () => {
    const error = new Error('Test error');
    metrics.recordError(error);
    
    const report = metrics.getReport();
    expect(report.errors).toBe(1);
  });

  test('should reset metrics', () => {
    metrics.recordProcessing(100);
    metrics.recordError(new Error('Test error'));
    metrics.reset();
    
    const report = metrics.getReport();
    expect(report.processedFiles).toBe(0);
    expect(report.errors).toBe(0);
    expect(report.processingTime).toBe(0);
    expect(report.lastProcessed).toBeNull();
  });
});
