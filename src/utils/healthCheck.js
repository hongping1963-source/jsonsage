/**
 * 健康检查类
 */
class HealthChecker {
  constructor() {
    this.status = {
      isHealthy: true,
      lastCheck: new Date(),
      errors: []
    };
  }

  /**
   * 执行健康检查
   * @param {Object} components - 需要检查的组件
   * @returns {Object} 健康状态报告
   */
  async check(components = {}) {
    this.status.lastCheck = new Date();
    this.status.errors = [];

    try {
      // 检查文件系统访问
      await this.checkFileSystem();

      // 检查各个组件
      for (const [name, component] of Object.entries(components)) {
        if (typeof component.healthCheck === 'function') {
          await component.healthCheck();
        }
      }

      this.status.isHealthy = true;
    } catch (error) {
      this.status.isHealthy = false;
      this.status.errors.push(error.message);
    }

    return this.getStatus();
  }

  /**
   * 检查文件系统访问
   * @private
   */
  async checkFileSystem() {
    const fs = require('fs').promises;
    try {
      await fs.access('.');
    } catch (error) {
      throw new Error('文件系统访问失败');
    }
  }

  /**
   * 获取健康状态
   * @returns {Object} 健康状态
   */
  getStatus() {
    return {
      ...this.status,
      uptime: process.uptime()
    };
  }
}

module.exports = HealthChecker;
