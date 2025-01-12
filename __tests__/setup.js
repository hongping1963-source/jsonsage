// Jest测试环境设置

// 设置测试超时时间
jest.setTimeout(10000);

// 全局变量
global.testConfig = {
  triggers: {
    onFileChange: {
      patterns: ['**/*.json'],
      exclude: ['node_modules/**', '.agentflow.json']
    }
  },
  actions: {
    processJson: {
      agent: 'json-processor',
      config: {
        validateSchema: true,
        autoFormat: true
      }
    }
  }
};
