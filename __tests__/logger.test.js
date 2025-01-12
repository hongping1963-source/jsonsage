const createLogger = require('../src/utils/logger');

describe('Logger', () => {
  let logger;

  beforeEach(() => {
    logger = createLogger({
      level: 'debug',
      filename: 'test.log'
    });
  });

  test('should create logger instance', () => {
    expect(logger).toBeDefined();
    expect(typeof logger.info).toBe('function');
    expect(typeof logger.error).toBe('function');
    expect(typeof logger.debug).toBe('function');
  });

  test('should log messages', () => {
    const infoSpy = jest.spyOn(logger, 'info');
    const errorSpy = jest.spyOn(logger, 'error');

    logger.info('test info message');
    logger.error('test error message');

    expect(infoSpy).toHaveBeenCalledWith('test info message');
    expect(errorSpy).toHaveBeenCalledWith('test error message');
  });
});
