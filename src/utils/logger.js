const winston = require('winston');

/**
 * 创建日志记录器
 * @param {Object} options - 日志配置选项
 * @param {string} options.level - 日志级别
 * @param {string} options.filename - 日志文件名
 * @returns {winston.Logger} Winston日志记录器实例
 */
function createLogger(options = {}) {
  const {
    level = 'info',
    filename = 'agent-workflow.log'
  } = options;

  return winston.createLogger({
    level,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename }),
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple()
        )
      })
    ]
  });
}

module.exports = createLogger;
