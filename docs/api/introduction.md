---
sidebar_position: 1
---

# API 介绍

:::info 更新时间
最后更新：2025年1月14日
:::

JsonSage提供了一套强大而灵活的API，用于处理JSON数据的验证、转换和监控。

## 核心概念

### JsonSage 实例

JsonSage 实例是所有操作的入口点：

```typescript
import { JsonSage } from 'jsonsage';

const jsonsage = new JsonSage({
  // 配置选项
  watchPath: './data',
  validateOnChange: true
});
```

### 监控器

监控器用于观察JSON文件的变化：

```typescript
jsonsage.monitor('./data', {
  pattern: '*.json',
  recursive: true,
  onChange: (file) => {
    console.log(`文件变化: ${file}`);
  }
});
```

### 验证器

验证器用于检查JSON数据的有效性：

```typescript
jsonsage.validate('./data/config.json', {
  schema: './schemas/config.schema.json',
  onError: (errors) => {
    console.error('验证错误:', errors);
  }
});
```

### 转换器

转换器用于处理JSON数据的转换：

```typescript
jsonsage.transform('./data/input.json', {
  output: './data/output.json',
  rules: [
    {
      path: '$.data',
      transform: (value) => value.toUpperCase()
    }
  ]
});
```

## 下一步

- [查看详细API参考](/api/reference)
- [浏览示例](/examples/basic/file-monitoring)
- [了解最佳实践](/best-practices)
