---
sidebar_position: 1
---

# 核心 API

## JsonSage 类

主要的类，用于处理和验证 JSON 数据。

### 构造函数

```typescript
constructor(options?: JsonSageOptions)
```

#### 参数

- `options` (可选): 配置选项
  - `validateOnInit`: 是否在初始化时验证数据 (默认: `true`)
  - `strictMode`: 是否使用严格模式 (默认: `false`)

### 方法

#### validate

验证 JSON 数据的结构和内容。

```typescript
async validate(data: any): Promise<ValidationResult>
```

**参数:**
- `data`: 要验证的数据

**返回值:**
- `ValidationResult`: 验证结果对象
  - `isValid`: 验证是否通过
  - `errors`: 错误信息数组

#### transform

转换数据格式。

```typescript
async transform(data: any, options?: TransformOptions): Promise<any>
```

**参数:**
- `data`: 要转换的数据
- `options` (可选): 转换选项
  - `format`: 目标格式
  - `schema`: 目标模式

**返回值:**
- 转换后的数据

## 类型定义

```typescript
interface JsonSageOptions {
  validateOnInit?: boolean;
  strictMode?: boolean;
}

interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

interface ValidationError {
  path: string;
  message: string;
  code: string;
}

interface TransformOptions {
  format?: 'json' | 'xml' | 'yaml';
  schema?: object;
}
```
