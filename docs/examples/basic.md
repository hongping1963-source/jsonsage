---
sidebar_position: 1
---

# 基础示例

## 数据验证

### 基本类型验证

```javascript
const { JsonSage } = require('jsonsage');

const sage = new JsonSage();

const data = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  hobbies: ["reading", "coding"]
};

const result = await sage.validate(data);
console.log(result.isValid ? "验证通过" : "验证失败");
```

### 自定义验证规则

```javascript
const { JsonSage } = require('jsonsage');

const sage = new JsonSage({
  rules: {
    age: {
      min: 0,
      max: 150
    },
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
  }
});

const result = await sage.validate(data);
```

## 数据转换

### JSON 到 YAML

```javascript
const data = {
  user: {
    name: "John",
    age: 30
  }
};

const yaml = await sage.transform(data, {
  format: 'yaml'
});
```

### 自定义转换

```javascript
const data = {
  firstName: "John",
  lastName: "Doe"
};

const result = await sage.transform(data, {
  schema: {
    fullName: '${firstName} ${lastName}'
  }
});

console.log(result);
// 输出: { fullName: "John Doe" }
```
