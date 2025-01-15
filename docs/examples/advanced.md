---
sidebar_position: 2
---

# 高级示例

## AI 驱动的数据验证

使用 AI 模型来验证数据的语义正确性。

```javascript
const { JsonSage } = require('jsonsage');

const sage = new JsonSage({
  useAI: true,
  aiConfig: {
    model: 'deepseek',
    confidenceThreshold: 0.8
  }
});

const data = {
  productDescription: "这是一个高质量的产品，采用最新技术制造...",
  specifications: {
    material: "高级合金",
    dimensions: "10x20x30cm"
  }
};

const result = await sage.validate(data);
```

## 自定义验证器

创建自定义验证器来处理特殊的业务逻辑。

```javascript
const { JsonSage, ValidationRule } = require('jsonsage');

class CustomValidator extends ValidationRule {
  validate(value, context) {
    // 自定义验证逻辑
    return {
      isValid: true,
      errors: []
    };
  }
}

const sage = new JsonSage({
  validators: {
    custom: new CustomValidator()
  }
});
```

## 数据转换管道

创建复杂的数据转换管道。

```javascript
const { JsonSage, Pipeline } = require('jsonsage');

const pipeline = new Pipeline()
  .addStep('validate')
  .addStep('transform', {
    format: 'internal'
  })
  .addStep('enrich', {
    source: 'external-api'
  })
  .addStep('validate')
  .addStep('transform', {
    format: 'output'
  });

const sage = new JsonSage();
const result = await sage.process(data, pipeline);
```

## 性能优化

使用缓存和并行处理来优化性能。

```javascript
const { JsonSage } = require('jsonsage');

const sage = new JsonSage({
  cache: {
    enabled: true,
    ttl: 3600
  },
  parallel: {
    enabled: true,
    maxWorkers: 4
  }
});

// 批量处理
const results = await sage.validateMany([
  data1,
  data2,
  data3
]);
```
