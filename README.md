# JsonSage

智能的JSON处理工作流系统，提供自动化监控、验证和转换功能。

## 特性

- 自动监控JSON文件变化
- 智能JSON验证和格式化
- 完整的指标收集和监控
- 内置健康检查和错误处理
- 高性能和可扩展性

## 项目结构

```
jsonsage/
├── .github/                 # GitHub配置目录
│   └── workflows/          # GitHub Actions工作流配置
│       ├── test-build.yml  # 测试和构建工作流
│       └── publish.yml     # 发布工作流
├── __tests__/             # 测试文件目录
│   ├── setup.js           # 测试环境设置
│   ├── fileProcessing.test.js
│   ├── healthCheck.test.js
│   ├── logger.test.js
│   └── metrics.test.js
├── docs/                  # 文档目录
│   ├── README.md          # 文档主页
│   ├── api/              # API文档
│   ├── development/      # 开发文档
│   ├── workflows/        # 工作流文档
│   ├── configuration/    # 配置文档
│   └── deployment/       # 部署文档
├── src/                  # 源代码目录
│   ├── utils/           # 工具函数
│   │   ├── logger.js    # 日志工具
│   │   ├── metrics.js   # 指标收集
│   │   └── healthCheck.js # 健康检查
│   └── index.js         # 主入口文件
├── .agentflow.json      # 工作流配置
└── package.json         # 项目配置
```

## 快速开始

1. 安装
```bash
npm install jsonsage
```

2. 配置
创建 `.agentflow.json` 文件：

```json
{
  "version": "1.0",
  "triggers": {
    "onFileChange": {
      "patterns": ["**/*.json"],
      "exclude": ["node_modules/**", ".agentflow.json"]
    }
  },
  "actions": {
    "processJson": {
      "agent": "json-processor",
      "config": {
        "validateSchema": true,
        "autoFormat": true
      }
    }
  }
}
```

3. 使用
```javascript
const JsonSage = require('jsonsage');

const sage = new JsonSage({
  // 配置选项
});

sage.start();
```

## 文档

详细文档请查看 [docs](./docs/README.md) 目录：

- [API文档](./docs/api/README.md)
- [开发指南](./docs/development/README.md)
- [工作流文档](./docs/workflows/README.md)
- [配置说明](./docs/configuration/README.md)
- [部署指南](./docs/deployment/README.md)

## 贡献

欢迎提交Issue和Pull Request。详细信息请查看[贡献指南](./docs/development/README.md)。

## 许可证

MIT
