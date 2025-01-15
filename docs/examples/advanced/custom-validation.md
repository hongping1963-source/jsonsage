# 自定义验证规则示例

本示例展示如何在JsonSage中创建和使用自定义验证规则。

## 自定义关键字

### 基本自定义关键字

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';

const sage = new JsonSage();

// 添加自定义关键字
sage.addKeyword('range', {
  validate: (schema: any, data: number) => {
    return data >= schema.min && data <= schema.max;
  },
  errors: true,
  metaSchema: {
    type: 'object',
    properties: {
      min: { type: 'number' },
      max: { type: 'number' }
    },
    required: ['min', 'max']
  }
});

// 使用自定义关键字
const schema = {
  type: 'object',
  properties: {
    age: {
      type: 'number',
      range: { min: 0, max: 120 }
    }
  }
};
```

### 复杂验证逻辑

```typescript
// 添加中国身份证验证
sage.addKeyword('isChineseId', {
  validate: (schema: boolean, data: string) => {
    if (!schema) return true;
    
    // 身份证号码验证逻辑
    const idRegex = /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dX]$/;
    if (!idRegex.test(data)) return false;
    
    // 校验码验证
    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const codes = '10X98765432';
    
    const sum = data.slice(0, 17).split('')
      .reduce((acc, curr, idx) => acc + Number(curr) * weights[idx], 0);
    
    return data[17] === codes[sum % 11];
  },
  errors: {
    message: '必须是有效的中国身份证号码'
  }
});
```

## 自定义格式

### 自定义字符串格式

```typescript
// 添加中国手机号格式
sage.addFormat('chinese-mobile', {
  validate: (data: string) => /^1[3-9]\d{9}$/.test(data),
  errors: {
    message: '必须是有效的中国手机号码'
  }
});

// 添加中国邮政编码格式
sage.addFormat('chinese-postcode', {
  validate: (data: string) => /^\d{6}$/.test(data),
  errors: {
    message: '必须是有效的中国邮政编码'
  }
});
```

### 自定义日期时间格式

```typescript
// 添加自定义日期格式
sage.addFormat('chinese-date', {
  validate: (data: string) => {
    const regex = /^(\d{4})(-)?(0[1-9]|1[0-2])(-)?(0[1-9]|[12]\d|3[01])$/;
    if (!regex.test(data)) return false;
    
    const [_, year, __, month, ___, day] = regex.exec(data)!;
    const date = new Date(+year, +month - 1, +day);
    return date.getFullYear() === +year &&
           date.getMonth() === +month - 1 &&
           date.getDate() === +day;
  },
  errors: {
    message: '必须是有效的日期格式 (YYYY-MM-DD)'
  }
});
```

## 自定义验证函数

```typescript
// 添加自定义验证函数
sage.addValidator('isValidPassword', (data: string) => {
  const hasLength = data.length >= 8;
  const hasUpper = /[A-Z]/.test(data);
  const hasLower = /[a-z]/.test(data);
  const hasNumber = /\d/.test(data);
  const hasSpecial = /[!@#$%^&*]/.test(data);
  
  return {
    valid: hasLength && hasUpper && hasLower && hasNumber && hasSpecial,
    errors: [
      !hasLength && '密码长度至少为8位',
      !hasUpper && '密码必须包含大写字母',
      !hasLower && '密码必须包含小写字母',
      !hasNumber && '密码必须包含数字',
      !hasSpecial && '密码必须包含特殊字符'
    ].filter(Boolean)
  };
});
```

## 完整示例

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';

async function setupCustomValidation() {
  const sage = new JsonSage();

  // 添加自定义关键字
  sage.addKeyword('range', {
    validate: (schema: any, data: number) => {
      return data >= schema.min && data <= schema.max;
    },
    errors: true,
    metaSchema: {
      type: 'object',
      properties: {
        min: { type: 'number' },
        max: { type: 'number' }
      },
      required: ['min', 'max']
    }
  });

  // 添加自定义格式
  sage.addFormat('chinese-mobile', {
    validate: (data: string) => /^1[3-9]\d{9}$/.test(data),
    errors: {
      message: '必须是有效的中国手机号码'
    }
  });

  // 添加自定义验证函数
  sage.addValidator('isComplexObject', (data: any) => {
    const checks = {
      hasRequiredFields: Boolean(data.id && data.name),
      hasValidTypes: typeof data.id === 'string' && typeof data.name === 'string',
      hasValidFormat: /^[A-Z]{2}_\d{6}$/.test(data.id),
      hasValidLength: data.name.length >= 2 && data.name.length <= 50
    };

    return {
      valid: Object.values(checks).every(Boolean),
      errors: Object.entries(checks)
        .filter(([_, valid]) => !valid)
        .map(([check]) => `Failed check: ${check}`)
    };
  });

  // 定义使用自定义验证的模式
  const schema = {
    type: 'object',
    properties: {
      id: { type: 'string' },
      name: { type: 'string' },
      age: {
        type: 'number',
        range: { min: 0, max: 120 }
      },
      phone: {
        type: 'string',
        format: 'chinese-mobile'
      },
      metadata: {
        type: 'object',
        isComplexObject: true
      }
    },
    required: ['id', 'name', 'age']
  };

  // 验证示例
  const testData = {
    id: 'USER_001',
    name: '张三',
    age: 30,
    phone: '13912345678',
    metadata: {
      id: 'MD_123456',
      name: 'Test Metadata'
    }
  };

  const result = await sage.validate(testData, schema);
  
  if (result.valid) {
    console.log('验证通过');
  } else {
    console.error('验证失败:', result.errors);
  }

  return sage;
}

// 使用示例
setupCustomValidation()
  .then(sage => {
    console.log('自定义验证规则设置完成');
  })
  .catch(error => {
    console.error('设置自定义验证规则失败:', error);
  });
```

## 最佳实践

1. **模块化组织**
   - 将相关的自定义验证规则组织在一起
   - 创建验证规则库便于复用

2. **错误处理**
   - 提供清晰的错误消息
   - 支持多语言错误信息

3. **性能考虑**
   - 优化复杂验证逻辑
   - 使用缓存减少重复验证

4. **可维护性**
   - 为复杂验证添加详细注释
   - 创建验证规则的单元测试

5. **扩展性**
   - 设计灵活的验证接口
   - 支持验证规则的动态加载

## 注意事项

1. 自定义关键字名称不要与标准JSON Schema关键字冲突
2. 验证函数应该是纯函数，避免副作用
3. 错误消息应该清晰明确，便于用户理解
4. 考虑验证规则的复用性和组合性
5. 注意验证性能，特别是在处理大量数据时
