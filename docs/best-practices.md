---
sidebar_position: 5
---

# 最佳实践

本文档提供了使用 JsonSage 的一些最佳实践建议。

## 性能优化

### 使用流式处理

对于大型JSON文件，建议使用流式处理API：

```javascript
const { createJsonStream } = require('jsonsage');

const stream = createJsonStream('large-file.json');
stream.on('data', chunk => {
  // 处理数据块
});
```

### 启用缓存

对于频繁访问的JSON文件，启用缓存可以显著提高性能：

```javascript
const jsonsage = new JsonSage({
  cache: {
    enabled: true,
    maxSize: 100 // 缓存最多100个文件
  }
});
```

## 错误处理

### 使用详细的错误信息

配置详细的错误信息可以帮助快速定位问题：

```javascript
jsonsage.validate(data, {
  detailed: true,
  onError: (errors) => {
    errors.forEach(error => {
      console.error(`${error.path}: ${error.message}`);
    });
  }
});
```

### 实现错误恢复机制

对于关键应用，建议实现错误恢复机制：

```javascript
jsonsage.monitor('./config', {
  onError: async (error) => {
    await backupService.restore();
    await notificationService.alert(error);
  }
});
```

## 文件组织

### 使用模块化的Schema

将大型Schema拆分为小型、可重用的模块：

```javascript
// schemas/common.json
{
  "definitions": {
    "address": {
      "type": "object",
      "properties": {
        "street": { "type": "string" },
        "city": { "type": "string" }
      }
    }
  }
}

// schemas/user.json
{
  "$ref": "./common.json#/definitions/address"
}
```

### 采用一致的目录结构

建议采用以下目录结构：

```
project/
├── schemas/           # JSON Schema 文件
├── transforms/        # 转换规则
├── validators/        # 自定义验证器
└── data/             # JSON 数据文件
```

## 监控与日志

### 实现全面的监控

对重要的操作进行监控：

```javascript
jsonsage.on('fileChange', (event) => {
  metrics.recordFileChange(event);
});

jsonsage.on('validation', (result) => {
  metrics.recordValidation(result);
});
```

### 使用结构化日志

采用结构化的日志格式：

```javascript
jsonsage.setLogger({
  log: (level, message, meta) => {
    logger.log({
      level,
      message,
      ...meta,
      timestamp: new Date()
    });
  }
});
```

## 安全性

### 验证输入数据

始终验证外部输入的JSON数据：

```javascript
const schema = require('./schemas/input.json');
jsonsage.validate(input, {
  schema,
  strict: true
});
```

### 限制文件大小

设置合理的文件大小限制：

```javascript
jsonsage.setConfig({
  maxFileSize: 10 * 1024 * 1024 // 10MB
});
```

## 测试

### 编写全面的测试

为每个关键功能编写测试：

```javascript
describe('JsonSage', () => {
  it('should validate complex nested objects', () => {
    const result = jsonsage.validate(complexData);
    expect(result.isValid).toBe(true);
  });
});
```

### 使用测试数据生成器

使用测试数据生成器创建测试数据：

```javascript
const { generateTestData } = require('jsonsage/testing');

const testData = generateTestData({
  schema: './schemas/user.json',
  count: 100
});
```

## 版本控制

### 使用语义化版本

为Schema文件使用语义化版本：

```javascript
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/schemas/user/v1.2.0",
  "title": "User Schema v1.2.0"
}
```

### 维护向后兼容性

在更新Schema时保持向后兼容：

```javascript
const jsonsage = new JsonSage({
  schemaVersion: {
    current: '2.0.0',
    compatibility: ['1.0.0', '1.1.0']
  }
});
```
