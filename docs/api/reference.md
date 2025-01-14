# API 参考

## JsonSage

主类，提供所有核心功能。

### 构造函数

```typescript
constructor(config?: JsonSageConfig)
```

#### 参数
- `config`: 可选的配置对象

### 实例方法

#### start()
启动监控系统。

```typescript
async start(): Promise<void>
```

#### stop()
停止监控系统。

```typescript
async stop(): Promise<void>
```

#### validate()
验证JSON数据。

```typescript
async validate(
  input: string | object,
  schema: object
): Promise<ValidationResult>
```

#### transform()
转换JSON数据。

```typescript
async transform(
  input: string | object,
  rules: TransformationRules
): Promise<TransformResult>
```

#### on()
注册事件监听器。

```typescript
on(
  event: string,
  listener: (data: any) => void
): void
```

#### off()
移除事件监听器。

```typescript
off(
  event: string,
  listener: (data: any) => void
): void
```

### 静态方法

#### isValidJson()
检查字符串是否为有效的JSON。

```typescript
static isValidJson(str: string): boolean
```

## 配置接口

### JsonSageConfig

```typescript
interface JsonSageConfig {
  // 文件监控
  watchPath?: string | string[];
  patterns?: string | string[];
  exclude?: string[];
  
  // 验证
  validateOnChange?: boolean;
  schemas?: Record<string, any>;
  
  // 转换
  transformOnChange?: boolean;
  transformRules?: Record<string, any>;
  
  // 性能
  enablePerformanceMonitoring?: boolean;
  performanceConfig?: {
    sampleRate?: number;
    metricsInterval?: number;
    thresholds?: {
      duration?: number;
      memory?: number;
    };
  };
  
  // 缓存
  cache?: {
    enabled: boolean;
    maxSize?: number;
    ttl?: number;
  };
  
  // 错误处理
  errorHandling?: {
    retryOnFailure?: boolean;
    maxRetries?: number;
    logErrors?: boolean;
  };
}
```

## 事件

### fileChange
当监控的文件发生变化时触发。

```typescript
interface FileChangeEvent {
  type: 'add' | 'change' | 'unlink';
  path: string;
  timestamp: number;
}
```

### validationError
当验证失败时触发。

```typescript
interface ValidationError {
  file: string;
  errors: any[];
  schema: any;
}
```

### transformError
当转换失败时触发。

```typescript
interface TransformError {
  file: string;
  error: Error;
  source: any;
}
```

### performanceMetric
当收集到性能指标时触发。

```typescript
interface PerformanceMetric {
  operation: string;
  duration: number;
  memoryUsage: number;
  timestamp: number;
}
```

## 错误类型

### ValidationError
验证错误。

```typescript
class ValidationError extends Error {
  constructor(
    message: string,
    public details: any[],
    public path: string
  );
}
```

### TransformationError
转换错误。

```typescript
class TransformationError extends Error {
  constructor(
    message: string,
    public source: any,
    public target: any
  );
}
```

### FileOperationError
文件操作错误。

```typescript
class FileOperationError extends Error {
  constructor(
    message: string,
    public operation: string,
    public path: string
  );
}
```

## 工具函数

### formatJson()
格式化JSON字符串。

```typescript
function formatJson(
  json: string,
  indent: number = 2
): string
```

### parseJson()
安全地解析JSON字符串。

```typescript
function parseJson(
  json: string,
  reviver?: (key: any, value: any) => any
): any
```

### validateSchema()
验证JSON Schema的有效性。

```typescript
function validateSchema(
  schema: object
): boolean
```

## 常量

### 默认配置

```typescript
const DEFAULT_CONFIG: Partial<JsonSageConfig> = {
  patterns: ['**/*.json'],
  exclude: ['**/node_modules/**'],
  validateOnChange: false,
  transformOnChange: false,
  enablePerformanceMonitoring: false,
  cache: {
    enabled: true,
    maxSize: 1000,
    ttl: 3600000
  }
};
```

### 事件类型

```typescript
const EventTypes = {
  FILE_CHANGE: 'fileChange',
  VALIDATION_ERROR: 'validationError',
  TRANSFORM_ERROR: 'transformError',
  PERFORMANCE_METRIC: 'performanceMetric'
} as const;
```

## 类型定义

### ValidationResult

```typescript
interface ValidationResult {
  valid: boolean;
  errors?: any[];
  path?: string;
}
```

### TransformResult

```typescript
interface TransformResult {
  success: boolean;
  data?: any;
  error?: Error;
}
```

### PerformanceConfig

```typescript
interface PerformanceConfig {
  sampleRate?: number;
  metricsInterval?: number;
  thresholds?: {
    duration?: number;
    memory?: number;
  };
}
```

## 示例

### 基本用法

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';

const sage = new JsonSage({
  watchPath: './data',
  validateOnChange: true
});

sage.on('validationError', (error) => {
  console.error('验证错误:', error);
});

await sage.start();
```

### 自定义验证

```typescript
const schema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    age: { type: 'number' }
  },
  required: ['name']
};

const result = await sage.validate('./user.json', schema);
```

### 数据转换

```typescript
const rules = {
  'name': 'userName',
  'age': (value) => Number(value)
};

const result = await sage.transform('./data.json', rules);
```
