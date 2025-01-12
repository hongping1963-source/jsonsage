/**
 * 指标收集器类
 */
class MetricsCollector {
  constructor() {
    this.metrics = {
      processedFiles: 0,
      errors: 0,
      processingTime: 0,
      lastProcessed: null
    };
  }

  /**
   * 记录文件处理
   * @param {number} processingTime - 处理时间（毫秒）
   */
  recordProcessing(processingTime) {
    this.metrics.processedFiles += 1;
    this.metrics.processingTime += processingTime;
    this.metrics.lastProcessed = new Date();
  }

  /**
   * 记录错误
   * @param {Error} error - 错误对象
   */
  recordError(error) {
    this.metrics.errors += 1;
  }

  /**
   * 获取指标报告
   * @returns {Object} 指标报告
   */
  getReport() {
    return {
      ...this.metrics,
      averageProcessingTime: this.metrics.processedFiles > 0
        ? this.metrics.processingTime / this.metrics.processedFiles
        : 0
    };
  }

  /**
   * 重置指标
   */
  reset() {
    this.metrics = {
      processedFiles: 0,
      errors: 0,
      processingTime: 0,
      lastProcessed: null
    };
  }
}

module.exports = MetricsCollector;
