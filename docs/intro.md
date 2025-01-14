---
sidebar_position: 1
---

# JsonSage 快速入门

欢迎使用 JsonSage！这是一个智能的 JSON 处理工作流系统，它能帮助你轻松处理、验证和转换 JSON 数据。

## 特性

- 🔍 **智能验证** - 使用 AI 驱动的验证规则，自动检测数据问题
- 🔄 **自动转换** - 智能转换各种格式的数据为标准 JSON
- 📊 **数据分析** - 深入分析 JSON 数据结构和内容
- 🤖 **AI 助手** - 内置 DeepSeek AI 助手，帮助解答问题
- 📈 **性能监控** - 实时监控数据处理性能
- 🔒 **安全可靠** - 企业级的数据安全保护

## 快速开始

### 安装

```bash
npm install jsonsage
```

### 基础使用

```javascript
const { JsonSage } = require('jsonsage');

// 创建实例
const sage = new JsonSage();

// 验证 JSON 数据
const result = await sage.validate({
  name: "John",
  age: 30,
  email: "john@example.com"
});

// 检查验证结果
if (result.isValid) {
  console.log("数据验证通过！");
} else {
  console.log("验证失败：", result.errors);
}
```

### 数据转换

```javascript
// 从其他格式转换为 JSON
const csvData = `name,age,email
John,30,john@example.com`;

const jsonData = await sage.transform(csvData, {
  sourceFormat: 'csv',
  targetFormat: 'json'
});
```

### 使用 AI 助手

JsonSage 内置了强大的 DeepSeek AI 助手，可以帮助你：

- 解答 JSON 相关问题
- 提供最佳实践建议
- 帮助调试问题
- 生成示例代码

## 下一步

- 查看 [API 参考文档](/docs/api/reference) 了解更多功能
- 浏览 [示例集合](/docs/examples/basic/validation) 学习常见用法
- 阅读 [高级特性](/docs/examples/advanced/custom-validation) 深入了解

## 获取帮助

- 使用内置的 DeepSeek AI 助手
- 查看 [常见问题解答](/docs/faq)
- 在 [GitHub](https://github.com/hongping1963-source/jsonsage) 上提交 Issue
- 加入我们的 [社区讨论](https://github.com/hongping1963-source/jsonsage/discussions)

## 贡献代码

我们欢迎社区贡献！请查看我们的 [贡献指南](https://github.com/hongping1963-source/jsonsage/blob/main/CONTRIBUTING.md) 了解如何参与项目开发。
