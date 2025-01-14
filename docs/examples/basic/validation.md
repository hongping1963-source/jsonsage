# JSON数据验证示例

本示例展示如何使用JsonSage进行JSON数据验证。

## 基础验证

### 简单类型验证

最基本的验证是检查数据类型和必填字段：

```typescript
import { JsonSage } from 'jsonsage';

const sage = new JsonSage();

// 要验证的数据
const data = {
  name: "John Doe",
  age: 30,
  email: "john@example.com",
  isActive: true
};

// 验证数据
const result = await sage.validate(data);

if (result.isValid) {
  console.log("数据验证通过");
} else {
  console.error("验证失败:", result.errors);
}
```

### 使用 Schema 验证

使用 JSON Schema 进行更复杂的验证：

```typescript
const userSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 2,
      maxLength: 50
    },
    age: {
      type: "number",
      minimum: 0,
      maximum: 120
    },
    email: {
      type: "string",
      format: "email"
    },
    isActive: {
      type: "boolean"
    }
  },
  required: ["name", "email"]
};

const result = await sage.validate(data, userSchema);
```

### 自定义验证规则

添加自定义验证规则：

```typescript
const customSchema = {
  type: "object",
  properties: {
    password: {
      type: "string",
      minLength: 8,
      pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$"
    },
    confirmPassword: {
      type: "string"
    }
  },
  required: ["password", "confirmPassword"],
  custom: {
    passwordMatch: (data) => {
      return data.password === data.confirmPassword;
    }
  }
};

const userData = {
  password: "Password123",
  confirmPassword: "Password123"
};

const result = await sage.validate(userData, customSchema);
```

### 数组验证

验证数组类型的数据：

```typescript
const arraySchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: { type: "number" },
      name: { type: "string" }
    },
    required: ["id", "name"]
  },
  minItems: 1,
  maxItems: 10
};

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];

const result = await sage.validate(users, arraySchema);
```

### 嵌套对象验证

验证复杂的嵌套对象：

```typescript
const nestedSchema = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        name: { type: "string" },
        address: {
          type: "object",
          properties: {
            street: { type: "string" },
            city: { type: "string" },
            country: { type: "string" }
          },
          required: ["street", "city"]
        }
      },
      required: ["name", "address"]
    }
  }
};

const nestedData = {
  user: {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    }
  }
};

const result = await sage.validate(nestedData, nestedSchema);
```

### 错误处理

处理验证错误：

```typescript
try {
  const result = await sage.validate(data, schema);
  
  if (!result.isValid) {
    result.errors.forEach(error => {
      console.error(`错误路径: ${error.path}`);
      console.error(`错误消息: ${error.message}`);
      console.error(`错误类型: ${error.type}`);
    });
  }
} catch (error) {
  console.error("验证过程出错:", error);
}
```

### 使用 AI 辅助验证

JsonSage 的 AI 功能可以帮助你识别潜在的数据问题：

```typescript
// 启用 AI 验证
const sage = new JsonSage({
  aiModel: 'deepseek'
});

// AI 会分析数据并提供建议
const result = await sage.validate(data, {
  enableAI: true,
  aiSuggestions: true
});

// 查看 AI 建议
if (result.suggestions) {
  console.log("AI 建议:", result.suggestions);
}
```

## 高级验证

### 自定义格式

```typescript
sage.addFormat('chinese-phone', {
  validate: (phone) => /^1[3-9]\d{9}$/.test(phone),
  errorMessage: '必须是有效的中国手机号码'
});

const schema = {
  type: 'object',
  properties: {
    phone: { type: 'string', format: 'chinese-phone' }
  }
};
```

### 条件验证

```typescript
const schema = {
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['personal', 'business'] },
    taxId: { type: 'string' }
  },
  required: ['type'],
  if: {
    properties: { type: { const: 'business' } }
  },
  then: {
    required: ['taxId']
  }
};
```

## 批量验证

```typescript
async function validateMultipleFiles() {
  const sage = new JsonSage();
  
  const results = await sage.validateBatch({
    './users/*.json': userSchema,
    './products/*.json': productSchema,
    './orders/*.json': orderSchema
  });

  for (const [file, result] of Object.entries(results)) {
    if (!result.valid) {
      console.error(`文件 ${file} 验证失败:`, result.errors);
    }
  }
}
```

## 实时验证

```typescript
const sage = new JsonSage({
  watchPath: './data',
  validateOnChange: true,
  schemas: {
    'users/*.json': userSchema,
    'products/*.json': productSchema
  }
});

sage.on('validationError', (error) => {
  console.error('验证错误:', {
    file: error.file,
    errors: error.errors
  });
});

sage.start();
```

## 完整示例

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';
import * as fs from 'fs';

async function setupValidation() {
  // 创建验证器实例
  const sage = new JsonSage({
    watchPath: './data',
    validateOnChange: true
  });

  // 添加自定义格式
  sage.addFormat('chinese-phone', {
    validate: (phone) => /^1[3-9]\d{9}$/.test(phone),
    errorMessage: '必须是有效的中国手机号码'
  });

  // 定义用户模式
  const userSchema = {
    type: 'object',
    properties: {
      id: { type: 'string', pattern: '^USER_\\d+$' },
      name: { type: 'string', minLength: 2 },
      age: { type: 'number', minimum: 0 },
      email: { type: 'string', format: 'email' },
      phone: { type: 'string', format: 'chinese-phone' },
      address: {
        type: 'object',
        properties: {
          street: { type: 'string' },
          city: { type: 'string' },
          country: { type: 'string' }
        },
        required: ['city', 'country']
      }
    },
    required: ['id', 'name', 'email']
  };

  // 配置验证规则
  sage.setSchemas({
    'users/*.json': userSchema
  });

  // 监听验证事件
  sage.on('validationError', (error) => {
    console.error(`文件 ${error.file} 验证失败:`, error.errors);
    // 发送通知或记录日志
    notifyValidationError(error);
  });

  sage.on('validationSuccess', (file) => {
    console.log(`文件 ${file} 验证通过`);
  });

  // 启动监控和验证
  await sage.start();

  return sage;
}

// 使用示例
const userData = {
  id: 'USER_001',
  name: '张三',
  age: 30,
  email: 'zhangsan@example.com',
  phone: '13912345678',
  address: {
    street: '中关村大街1号',
    city: '北京',
    country: '中国'
  }
};

// 验证单个数据
const sage = new JsonSage();
const result = await sage.validateData(userData, userSchema);

if (result.valid) {
  console.log('数据验证通过');
  await fs.promises.writeFile(
    './data/users/USER_001.json',
    JSON.stringify(userData, null, 2)
  );
} else {
  console.error('数据验证失败:', result.errors);
}
```

## 最佳实践

1. **模式复用**
   - 将常用的模式定义为常量
   - 使用模式组合创建复杂验证规则

2. **错误处理**
   - 为每种错误类型定义清晰的错误消息
   - 实现错误恢复机制

3. **性能优化**
   - 使用缓存避免重复验证
   - 实现增量验证

4. **可维护性**
   - 将模式定义放在单独的文件中
   - 使用注释说明验证规则的用途

5. **监控和日志**
   - 记录验证错误和性能指标
   - 设置告警阈值
