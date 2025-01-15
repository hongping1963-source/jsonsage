# JSON数据转换示例

本示例展示如何使用JsonSage进行JSON数据转换。

## 基础转换

### 简单字段映射

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';

const transformer = new JsonSage();

const mappingRule = {
  'name': 'userName',
  'age': 'userAge',
  'address.city': 'userCity'
};

const result = await transformer.transform('./input.json', mappingRule);
```

### 数据类型转换

```typescript
const typeRule = {
  'age': (value) => Number(value),
  'isActive': (value) => Boolean(value),
  'scores': (value) => Array.isArray(value) ? value : [value]
};

const result = await transformer.transform('./data.json', typeRule);
```

## 高级转换

### 自定义转换函数

```typescript
const customRule = {
  'fullName': (data) => `${data.firstName} ${data.lastName}`,
  'age': (value) => ({
    years: Number(value),
    isAdult: Number(value) >= 18
  }),
  'contacts': (data) => ({
    email: data.email,
    phone: formatPhoneNumber(data.phone)
  })
};
```

### 条件转换

```typescript
const conditionalRule = {
  'type': (value, data) => {
    if (data.age < 18) return 'junior';
    if (data.age < 60) return 'adult';
    return 'senior';
  },
  'discount': (value, data) => {
    switch (data.memberType) {
      case 'gold': return 0.8;
      case 'silver': return 0.9;
      default: return 1;
    }
  }
};
```

## 批量转换

```typescript
async function transformMultipleFiles() {
  const transformer = new JsonSage();
  
  const results = await transformer.transformBatch({
    './users/*.json': userTransformRule,
    './orders/*.json': orderTransformRule
  });

  for (const [file, result] of Object.entries(results)) {
    if (result.success) {
      await saveTransformedFile(file, result.data);
    }
  }
}
```

## 实时转换

```typescript
const sage = new JsonSage({
  watchPath: './data',
  transformOnChange: true,
  transformRules: {
    'users/*.json': userTransformRule,
    'orders/*.json': orderTransformRule
  }
});

sage.on('transformComplete', (result) => {
  console.log(`文件 ${result.file} 转换完成`);
});

sage.start();
```

## 完整示例

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';
import * as fs from 'fs';
import * as path from 'path';

async function setupTransformation() {
  // 创建转换器实例
  const sage = new JsonSage({
    watchPath: './data',
    transformOnChange: true
  });

  // 定义用户数据转换规则
  const userTransformRule = {
    // 基本字段映射
    'id': 'userId',
    'name': (data) => ({
      firstName: data.name.split(' ')[0],
      lastName: data.name.split(' ')[1]
    }),
    
    // 地址转换
    'address': (data) => ({
      street: data.address.street,
      city: data.address.city,
      country: data.address.country,
      formatted: `${data.address.street}, ${data.address.city}, ${data.address.country}`
    }),
    
    // 联系方式转换
    'contacts': (data) => ({
      email: data.email.toLowerCase(),
      phone: formatPhoneNumber(data.phone),
      hasEmail: Boolean(data.email),
      hasPhone: Boolean(data.phone)
    }),
    
    // 计算字段
    'age': (value) => ({
      years: Number(value),
      isAdult: Number(value) >= 18,
      ageGroup: getAgeGroup(Number(value))
    }),
    
    // 状态转换
    'status': (value, data) => ({
      current: value,
      isActive: value === 'active',
      lastUpdated: new Date().toISOString()
    })
  };

  // 设置转换规则
  sage.setTransformRules({
    'users/*.json': userTransformRule
  });

  // 监听转换事件
  sage.on('transformError', (error) => {
    console.error(`文件 ${error.file} 转换失败:`, error.message);
    notifyTransformError(error);
  });

  sage.on('transformComplete', (result) => {
    console.log(`文件 ${result.file} 转换完成`);
    saveTransformedFile(result.file, result.data);
  });

  // 启动监控和转换
  await sage.start();

  return sage;
}

// 辅助函数
function formatPhoneNumber(phone) {
  // 格式化电话号码
  return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
}

function getAgeGroup(age) {
  if (age < 18) return 'junior';
  if (age < 30) return 'young';
  if (age < 50) return 'middle';
  return 'senior';
}

// 使用示例
const inputData = {
  id: '001',
  name: 'Zhang San',
  age: 30,
  email: 'ZHANGSAN@EXAMPLE.COM',
  phone: '13912345678',
  address: {
    street: '中关村大街1号',
    city: '北京',
    country: '中国'
  },
  status: 'active'
};

// 转换单个数据
const sage = new JsonSage();
const result = await sage.transformData(inputData, userTransformRule);

if (result.success) {
  console.log('数据转换成功:', result.data);
  await fs.promises.writeFile(
    './data/transformed/user_001.json',
    JSON.stringify(result.data, null, 2)
  );
} else {
  console.error('数据转换失败:', result.error);
}
```

## 最佳实践

1. **规则模块化**
   - 将转换规则分模块管理
   - 创建可重用的转换函数

2. **数据验证**
   - 转换前验证输入数据
   - 转换后验证输出数据

3. **错误处理**
   - 实现优雅的错误处理
   - 提供详细的错误信息

4. **性能优化**
   - 使用缓存避免重复转换
   - 实现增量转换

5. **可维护性**
   - 为复杂转换添加注释
   - 使用类型定义提高代码质量

6. **测试**
   - 为每个转换规则编写单元测试
   - 进行边界条件测试
