# 错误处理示例

本示例展示如何在JsonSage中实现全面的错误处理。

## 基础错误处理

### 异常捕获

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';

const sage = new JsonSage();

try {
  const result = await sage.validate('./data.json', schema);
} catch (error) {
  if (error instanceof JsonSage.ValidationError) {
    console.error('验证错误:', error.message);
    console.error('错误详情:', error.details);
  } else if (error instanceof JsonSage.FileError) {
    console.error('文件错误:', error.message);
  } else {
    console.error('未知错误:', error);
  }
}
```

### 错误事件监听

```typescript
sage.on('error', (error) => {
  console.error('发生错误:', error);
  notifyAdmin(error);
});

sage.on('validationError', (error) => {
  console.error('验证失败:', error);
  logValidationError(error);
});

sage.on('fileError', (error) => {
  console.error('文件操作失败:', error);
  retryOperation(error);
});
```

## 高级错误处理

### 自定义错误类型

```typescript
// 定义自定义错误类型
class ValidationError extends Error {
  constructor(
    message: string,
    public details: any[],
    public path: string
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

class TransformationError extends Error {
  constructor(
    message: string,
    public source: any,
    public target: any
  ) {
    super(message);
    this.name = 'TransformationError';
  }
}

class FileOperationError extends Error {
  constructor(
    message: string,
    public operation: string,
    public path: string
  ) {
    super(message);
    this.name = 'FileOperationError';
  }
}
```

### 错误恢复机制

```typescript
class ErrorRecovery {
  private retryCount: Map<string, number> = new Map();
  private readonly maxRetries = 3;

  async retry(operation: () => Promise<any>, key: string): Promise<any> {
    try {
      return await operation();
    } catch (error) {
      const retries = (this.retryCount.get(key) || 0) + 1;
      this.retryCount.set(key, retries);

      if (retries <= this.maxRetries) {
        console.log(`重试操作 ${key} (${retries}/${this.maxRetries})`);
        await this.delay(Math.pow(2, retries) * 1000);
        return this.retry(operation, key);
      }

      throw new Error(`操作 ${key} 失败，已重试 ${retries} 次`);
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

## 错误日志和监控

### 错误日志系统

```typescript
class ErrorLogger {
  private logFile: string;

  constructor(logFile: string) {
    this.logFile = logFile;
  }

  async log(error: Error, context: any = {}) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack
      },
      context
    };

    await fs.promises.appendFile(
      this.logFile,
      JSON.stringify(logEntry) + '\n'
    );
  }

  async getRecentErrors(count: number = 10): Promise<any[]> {
    const content = await fs.promises.readFile(this.logFile, 'utf-8');
    return content
      .split('\n')
      .filter(Boolean)
      .map(line => JSON.parse(line))
      .slice(-count);
  }
}
```

## 完整示例

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';
import * as fs from 'fs';

async function setupErrorHandling() {
  // 创建错误处理器
  const errorLogger = new ErrorLogger('./logs/errors.log');
  const errorRecovery = new ErrorRecovery();

  // 创建JsonSage实例
  const sage = new JsonSage({
    errorHandling: {
      retryOnFailure: true,
      maxRetries: 3,
      logErrors: true
    }
  });

  // 设置错误处理
  sage.on('error', async (error) => {
    // 记录错误
    await errorLogger.log(error, {
      type: 'general',
      timestamp: new Date()
    });

    // 通知管理员
    await notifyAdmin(error);
  });

  // 验证错误处理
  sage.on('validationError', async (error) => {
    await errorLogger.log(error, {
      type: 'validation',
      schema: error.schema,
      data: error.data
    });

    // 发送验证失败通知
    await sendValidationErrorNotification(error);
  });

  // 文件操作错误处理
  sage.on('fileError', async (error) => {
    await errorLogger.log(error, {
      type: 'file',
      operation: error.operation,
      path: error.path
    });

    // 尝试恢复
    if (error.operation === 'read') {
      await errorRecovery.retry(
        () => fs.promises.readFile(error.path),
        `read_${error.path}`
      );
    }
  });

  // 示例操作
  try {
    const result = await sage.validate('./data.json', schema);
    console.log('验证成功');
  } catch (error) {
    handleError(error);
  }

  return sage;
}

// 错误处理函数
async function handleError(error: any) {
  if (error instanceof ValidationError) {
    console.error('验证错误:', {
      message: error.message,
      details: error.details,
      path: error.path
    });

    // 发送验证错误报告
    await sendValidationErrorReport(error);
  } else if (error instanceof TransformationError) {
    console.error('转换错误:', {
      message: error.message,
      source: error.source,
      target: error.target
    });

    // 记录转换失败
    await logTransformationFailure(error);
  } else if (error instanceof FileOperationError) {
    console.error('文件操作错误:', {
      message: error.message,
      operation: error.operation,
      path: error.path
    });

    // 尝试文件操作恢复
    await recoverFileOperation(error);
  } else {
    console.error('未知错误:', error);
    // 记录未知错误
    await logUnknownError(error);
  }
}

// 错误恢复函数
async function recoverFileOperation(error: FileOperationError) {
  const recovery = new ErrorRecovery();
  
  try {
    await recovery.retry(
      async () => {
        switch (error.operation) {
          case 'read':
            return fs.promises.readFile(error.path);
          case 'write':
            return fs.promises.writeFile(error.path, error.data);
          default:
            throw new Error(`不支持的操作: ${error.operation}`);
        }
      },
      `${error.operation}_${error.path}`
    );
  } catch (retryError) {
    console.error('恢复失败:', retryError);
    throw retryError;
  }
}

// 使用示例
setupErrorHandling()
  .then(sage => {
    console.log('错误处理系统已启动');
  })
  .catch(error => {
    console.error('启动错误处理系统失败:', error);
  });
```

## 最佳实践

1. **错误分类**
   - 明确定义错误类型
   - 实现错误层级结构
   - 提供详细错误信息

2. **错误恢复**
   - 实现重试机制
   - 设置退避策略
   - 保存操作状态

3. **错误日志**
   - 记录详细上下文
   - 实现日志轮转
   - 提供日志分析

4. **监控告警**
   - 设置错误阈值
   - 实现多级告警
   - 提供错误趋势

5. **用户体验**
   - 提供友好错误消息
   - 支持错误定位
   - 提供恢复建议

## 注意事项

1. 避免暴露敏感信息
2. 防止错误级联
3. 控制日志大小
4. 优化重试策略
5. 处理异步错误
