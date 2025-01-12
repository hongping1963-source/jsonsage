const HealthChecker = require('../src/utils/healthCheck');

describe('HealthChecker', () => {
  let healthChecker;

  beforeEach(() => {
    healthChecker = new HealthChecker();
  });

  test('should initialize with healthy status', () => {
    const status = healthChecker.getStatus();
    expect(status.isHealthy).toBe(true);
    expect(status.errors).toHaveLength(0);
    expect(status.lastCheck).toBeInstanceOf(Date);
    expect(typeof status.uptime).toBe('number');
  });

  test('should perform health check', async () => {
    const mockComponent = {
      healthCheck: jest.fn().mockResolvedValue(true)
    };

    const status = await healthChecker.check({
      testComponent: mockComponent
    });

    expect(status.isHealthy).toBe(true);
    expect(mockComponent.healthCheck).toHaveBeenCalled();
  });

  test('should handle component check failure', async () => {
    const mockComponent = {
      healthCheck: jest.fn().mockRejectedValue(new Error('Component error'))
    };

    const status = await healthChecker.check({
      testComponent: mockComponent
    });

    expect(status.isHealthy).toBe(false);
    expect(status.errors).toHaveLength(1);
    expect(status.errors[0]).toBe('Component error');
  });
});
