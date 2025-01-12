const JsonAgentWorkflow = require('../src/index');
const fs = require('fs').promises;
const path = require('path');

describe('FileProcessing', () => {
  let workflow;
  const testDir = path.join(__dirname, 'test-files');
  const testFile = path.join(testDir, 'test.json');

  beforeAll(async () => {
    await fs.mkdir(testDir, { recursive: true });
  });

  beforeEach(() => {
    workflow = new JsonAgentWorkflow(global.testConfig);
  });

  afterEach(async () => {
    await workflow.stop();
    try {
      await fs.unlink(testFile);
    } catch (error) {
      // 忽略文件不存在的错误
    }
  });

  afterAll(async () => {
    try {
      await fs.rmdir(testDir);
    } catch (error) {
      // 忽略目录不存在的错误
    }
  });

  test('should start workflow', async () => {
    await expect(workflow.start()).resolves.not.toThrow();
  });

  test('should handle file changes', async () => {
    await workflow.start();
    
    // 创建测试文件
    await fs.writeFile(testFile, JSON.stringify({ test: true }));
    
    // 等待文件处理
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const metrics = workflow.metrics.getReport();
    expect(metrics.processedFiles).toBeGreaterThan(0);
  });

  test('should handle invalid JSON', async () => {
    await workflow.start();
    
    // 创建无效的JSON文件
    await fs.writeFile(testFile, 'invalid json');
    
    // 等待文件处理
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const metrics = workflow.metrics.getReport();
    expect(metrics.errors).toBeGreaterThan(0);
  });
});
