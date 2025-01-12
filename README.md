# JSON Agent Workflow

这是一个自动化的JSON处理工作流系统，可以监控JSON文件的变化并自动运行处理agent。

## 项目结构

```
json-agent-workflow/
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
│   │   ├── README.md
│   │   ├── core.md
│   │   └── utils.md
│   ├── development/      # 开发文档
│   │   ├── README.md
│   │   ├── setup.md
│   │   ├── testing.md
│   │   └── building.md
│   ├── workflows/        # 工作流文档
│   │   ├── README.md
│   │   ├── test-build.md
│   │   └── publish.md
│   ├── configuration/    # 配置文档
│   │   ├── README.md
│   │   ├── agent-workflow.md
│   │   └── security.md
│   └── deployment/       # 部署文档
│       ├── README.md
│       ├── environment.md
│       └── publishing.md
├── src/                  # 源代码目录
│   ├── utils/           # 工具函数
│   │   ├── logger.js
│   │   ├── metrics.js
│   │   └── healthCheck.js
│   └── index.js         # 主入口文件
├── .agentflow.json      # Agent工作流配置
├── .babelrc             # Babel配置
├── jest.config.js       # Jest测试配置
├── jsdoc.json          # JSDoc文档生成配置
└── package.json        # 项目配置
```

## 快速开始

1. 安装
```bash
npm install json-agent-workflow
```

2. 配置
在你的项目根目录创建 `.agentflow.json` 文件：

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
```bash
npm start
```

系统会自动监控所有JSON文件的变化，并在文件被创建或修改时运行配置的处理agent。

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
