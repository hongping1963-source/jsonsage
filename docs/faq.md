---
sidebar_position: 4
---

# 常见问题

## 基础问题

### JsonSage 是什么？

JsonSage 是一个智能的 JSON 处理工作流系统，它能帮助你轻松处理、验证和转换 JSON 数据。它集成了 AI 能力，可以进行智能数据验证和转换。

### 如何安装 JsonSage？

使用 npm 安装：

```bash
npm install jsonsage
```

### JsonSage 支持哪些 Node.js 版本？

JsonSage 支持 Node.js 14.x 及以上版本。

## 功能相关

### JsonSage 支持哪些数据格式？

JsonSage 主要处理 JSON 数据，但也支持：
- YAML
- XML
- CSV
- Plain Text

### 如何处理大型 JSON 文件？

JsonSage 提供了流式处理API来处理大型文件：

```javascript
const { createJsonStream } = require('jsonsage');

const stream = createJsonStream('large-file.json');
stream.on('data', chunk => {
  // 处理数据块
});
```

### 如何自定义验证规则？

可以通过配置选项或继承 `ValidationRule` 类来创建自定义规则：

```javascript
const sage = new JsonSage({
  rules: {
    customRule: {
      validate: (value) => {
        return {
          isValid: true,
          errors: []
        };
      }
    }
  }
});
```

## 性能问题

### JsonSage 的性能如何？

JsonSage 采用了多项优化措施：
- 缓存机制
- 并行处理
- 惰性加载
- 流式处理

对于普通大小的 JSON 文件（<10MB），处理时间通常在毫秒级别。

### 如何提高处理性能？

以下是一些提高性能的方法：

- 启用缓存功能
- 使用并行处理模式
- 使用流式API处理大文件
- 优化验证规则配置

## 其他问题

### 如何报告问题？

可以在 GitHub 上提交 issue：
https://github.com/hongping1963-source/jsonsage/issues

### 在哪里可以获取帮助？

- [文档中心](/intro)
- [GitHub Discussions](https://github.com/hongping1963-source/jsonsage/discussions)
- [示例代码](/examples/basic)
