const chokidar = require('chokidar');
const fs = require('fs').promises;
const createLogger = require('./utils/logger');
const MetricsCollector = require('./utils/metrics');
const HealthChecker = require('./utils/healthCheck');

class JsonAgentWorkflow {
  constructor(config) {
    this.config = config;
    this.logger = createLogger();
    this.metrics = new MetricsCollector();
    this.healthChecker = new HealthChecker();
    this.watcher = null;
  }

  /**
   * 启动工作流
   */
  async start() {
    try {
      this.logger.info('启动JSON Agent工作流');
      
      // 初始化文件监控
      const { patterns, exclude } = this.config.triggers.onFileChange;
      this.watcher = chokidar.watch(patterns, {
        ignored: exclude,
        persistent: true
      });

      // 绑定事件处理器
      this.watcher
        .on('add', this.handleFileChange.bind(this))
        .on('change', this.handleFileChange.bind(this))
        .on('error', this.handleError.bind(this));

      this.logger.info('文件监控已启动');
    } catch (error) {
      this.logger.error('启动失败', error);
      throw error;
    }
  }

  /**
   * 处理文件变化
   * @param {string} path - 文件路径
   */
  async handleFileChange(path) {
    const startTime = Date.now();
    this.logger.info(`处理文件: ${path}`);

    try {
      // 读取文件内容
      const content = await fs.readFile(path, 'utf-8');
      
      // 尝试解析JSON
      try {
        JSON.parse(content);
      } catch (parseError) {
        throw new Error(`Invalid JSON: ${parseError.message}`);
      }
      
      const processingTime = Date.now() - startTime;
      this.metrics.recordProcessing(processingTime);
      this.logger.info(`文件处理完成: ${path}`);
    } catch (error) {
      this.handleError(error);
    }
  }

  /**
   * 处理错误
   * @param {Error} error - 错误对象
   */
  handleError(error) {
    this.metrics.recordError(error);
    this.logger.error('处理错误', error);
  }

  /**
   * 停止工作流
   */
  async stop() {
    if (this.watcher) {
      await this.watcher.close();
      this.logger.info('工作流已停止');
    }
  }

  /**
   * 获取健康状态
   */
  async getHealth() {
    return this.healthChecker.check({
      metrics: this.metrics,
      watcher: this.watcher
    });
  }
}

module.exports = JsonAgentWorkflow;
