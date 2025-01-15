# API 参考文档

## JsonSage 类

主类，提供所有核心功能。

### 构造函数

```typescript
constructor(options?: JsonSageOptions)
```

#### 参数

- `options` (可选): 配置选项
  - `validateOnSave`: boolean - 保存时自动验证（默认：true）
  - `maxFileSize`: number - 最大文件大小（字节）（默认：10MB）
  - `aiModel`: string - AI 模型选择（默认：'deepseek'）

### 核心方法

#### validate()

验证 JSON 数据的有效性。

```typescript
async validate(data: any, schema?: JSONSchema): ValidationResult
```

**参数:**
- `data`: any - 要验证的数据
- `schema` (可选): JSONSchema - 验证模式

**返回值:**
- `ValidationResult`: 验证结果对象
  - `isValid`: boolean - 验证是否通过
  - `errors`: ValidationError[] - 错误列表

#### transform()

转换数据格式。

```typescript
async transform(
  data: string | object,
  options: TransformOptions
): Promise<object>
```

**参数:**
- `data`: string | object - 源数据
- `options`: TransformOptions
  - `sourceFormat`: string - 源格式（'csv'|'xml'|'yaml'|'json'）
  - `targetFormat`: string - 目标格式（默认：'json'）
  - `config`: object - 转换配置

**返回值:**
- 转换后的 JSON 对象

#### analyze()

分析 JSON 数据结构。

```typescript
analyze(data: object): AnalysisResult
```

**参数:**
- `data`: object - 要分析的 JSON 数据

**返回值:**
- `AnalysisResult`: 分析结果
  - `structure`: object - 数据结构
  - `stats`: object - 统计信息
  - `suggestions`: string[] - 优化建议

### 事件处理

#### on()

注册事件监听器。

```typescript
on(event: string, handler: Function): void
```

**支持的事件:**
- `'validate'`: 验证完成
- `'transform'`: 转换完成
- `'error'`: 发生错误
- `'ready'`: 系统就绪

### 工具方法

#### prettify()

美化 JSON 数据。

```typescript
prettify(data: object, options?: PrettifyOptions): string
```

#### minify()

压缩 JSON 数据。

```typescript
minify(data: object | string): string
```

#### diff()

比较两个 JSON 对象的差异。

```typescript
diff(obj1: object, obj2: object): DiffResult
```

## 类型定义

### JsonSageOptions

```typescript
interface JsonSageOptions {
  validateOnSave?: boolean;
  maxFileSize?: number;
  aiModel?: string;
  plugins?: Plugin[];
}
```

### ValidationResult

```typescript
interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}
```

### TransformOptions

```typescript
interface TransformOptions {
  sourceFormat: 'csv' | 'xml' | 'yaml' | 'json';
  targetFormat?: 'json';
  config?: {
    delimiter?: string;
    headers?: string[];
    encoding?: string;
  };
}
```

## 错误处理

所有方法都会在发生错误时抛出 `JsonSageError`：

```typescript
class JsonSageError extends Error {
  constructor(message: string, code: string, details?: any);
}
```

## 最佳实践

1. 始终使用 `try-catch` 块处理可能的错误
2. 在处理大文件时使用流式 API
3. 使用类型定义获得更好的开发体验
4. 注册错误事件处理器及时捕获问题

## 示例

### 基础验证

```typescript
try {
  const sage = new JsonSage();
  const result = await sage.validate({
    name: "John",
    age: 30
  });
  
  if (!result.isValid) {
    console.error("验证失败:", result.errors);
  }
} catch (error) {
  console.error("处理错误:", error);
}
```

### 格式转换

```typescript
const sage = new JsonSage();

// CSV 转 JSON
const csvData = `name,age\nJohn,30`;
const jsonData = await sage.transform(csvData, {
  sourceFormat: 'csv',
  config: {
    delimiter: ',',
    headers: ['name', 'age']
  }
});
```

### 事件监听

```typescript
const sage = new JsonSage();

sage.on('error', (error) => {
  console.error('发生错误:', error);
});

sage.on('validate', (result) => {
  console.log('验证完成:', result);
});
