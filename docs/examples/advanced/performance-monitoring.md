# 性能监控示例

本示例展示如何使用JsonSage进行性能监控和优化。

## 基础监控

### 操作计时

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';

const sage = new JsonSage({
  enablePerformanceMonitoring: true
});

// 监听性能事件
sage.on('performanceMetric', (metric) => {
  console.log('操作:', metric.operation);
  console.log('耗时:', metric.duration, 'ms');
  console.log('内存使用:', metric.memoryUsage, 'MB');
});
```

### 基本指标收集

```typescript
// 收集基本性能指标
const metrics = {
  operations: 0,
  totalDuration: 0,
  averageDuration: 0,
  maxDuration: 0,
  minDuration: Infinity
};

sage.on('performanceMetric', (metric) => {
  metrics.operations++;
  metrics.totalDuration += metric.duration;
  metrics.averageDuration = metrics.totalDuration / metrics.operations;
  metrics.maxDuration = Math.max(metrics.maxDuration, metric.duration);
  metrics.minDuration = Math.min(metrics.minDuration, metric.duration);
});
```

## 高级监控

### 详细性能分析

```typescript
// 创建性能分析器
class PerformanceAnalyzer {
  private metrics: Map<string, {
    count: number;
    totalDuration: number;
    maxDuration: number;
    minDuration: number;
    memoryUsage: number[];
  }> = new Map();

  record(operation: string, duration: number, memory: number) {
    if (!this.metrics.has(operation)) {
      this.metrics.set(operation, {
        count: 0,
        totalDuration: 0,
        maxDuration: 0,
        minDuration: Infinity,
        memoryUsage: []
      });
    }

    const metric = this.metrics.get(operation)!;
    metric.count++;
    metric.totalDuration += duration;
    metric.maxDuration = Math.max(metric.maxDuration, duration);
    metric.minDuration = Math.min(metric.minDuration, duration);
    metric.memoryUsage.push(memory);
  }

  getStats(operation: string) {
    const metric = this.metrics.get(operation);
    if (!metric) return null;

    return {
      operation,
      count: metric.count,
      averageDuration: metric.totalDuration / metric.count,
      maxDuration: metric.maxDuration,
      minDuration: metric.minDuration,
      averageMemory: average(metric.memoryUsage),
      maxMemory: Math.max(...metric.memoryUsage)
    };
  }
}
```

### 性能警报

```typescript
// 设置性能警报
const performanceThresholds = {
  duration: 1000, // 毫秒
  memory: 100,    // MB
  operationsPerSecond: 100
};

sage.on('performanceMetric', (metric) => {
  if (metric.duration > performanceThresholds.duration) {
    console.warn(`性能警告: 操作 ${metric.operation} 耗时过长 (${metric.duration}ms)`);
  }

  if (metric.memoryUsage > performanceThresholds.memory) {
    console.warn(`性能警告: 操作 ${metric.operation} 内存使用过高 (${metric.memoryUsage}MB)`);
  }
});
```

## 性能优化

### 缓存优化

```typescript
// 实现缓存系统
class CacheManager {
  private cache: Map<string, {
    data: any;
    timestamp: number;
    hits: number;
  }> = new Map();

  private maxSize: number;
  private ttl: number;

  constructor(maxSize = 1000, ttl = 3600000) {
    this.maxSize = maxSize;
    this.ttl = ttl;
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    item.hits++;
    return item.data;
  }

  set(key: string, data: any) {
    if (this.cache.size >= this.maxSize) {
      this.evictLeastUsed();
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      hits: 0
    });
  }

  private evictLeastUsed() {
    let leastUsedKey = null;
    let leastHits = Infinity;

    for (const [key, item] of this.cache.entries()) {
      if (item.hits < leastHits) {
        leastHits = item.hits;
        leastUsedKey = key;
      }
    }

    if (leastUsedKey) {
      this.cache.delete(leastUsedKey);
    }
  }
}
```

## 完整示例

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';
import * as fs from 'fs';

async function setupPerformanceMonitoring() {
  // 创建性能分析器
  const analyzer = new PerformanceAnalyzer();
  
  // 创建缓存管理器
  const cache = new CacheManager();

  // 创建JsonSage实例
  const sage = new JsonSage({
    enablePerformanceMonitoring: true,
    cache: {
      enabled: true,
      maxSize: 1000,
      ttl: 3600000
    }
  });

  // 设置性能阈值
  const thresholds = {
    duration: 1000,
    memory: 100,
    operationsPerSecond: 100
  };

  // 监听性能指标
  sage.on('performanceMetric', (metric) => {
    // 记录指标
    analyzer.record(
      metric.operation,
      metric.duration,
      metric.memoryUsage
    );

    // 检查阈值
    checkThresholds(metric, thresholds);

    // 记录到文件
    logMetric(metric);
  });

  // 定期生成报告
  setInterval(() => {
    generatePerformanceReport(analyzer);
  }, 300000); // 每5分钟

  return sage;
}

// 检查性能阈值
function checkThresholds(metric: any, thresholds: any) {
  if (metric.duration > thresholds.duration) {
    console.warn(`性能警告: 操作耗时过长`, {
      operation: metric.operation,
      duration: metric.duration,
      threshold: thresholds.duration
    });
  }

  if (metric.memoryUsage > thresholds.memory) {
    console.warn(`性能警告: 内存使用过高`, {
      operation: metric.operation,
      memory: metric.memoryUsage,
      threshold: thresholds.memory
    });
  }
}

// 记录指标到文件
function logMetric(metric: any) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    ...metric
  };

  fs.appendFileSync(
    './logs/performance.log',
    JSON.stringify(logEntry) + '\n'
  );
}

// 生成性能报告
function generatePerformanceReport(analyzer: PerformanceAnalyzer) {
  const operations = [
    'fileRead',
    'fileWrite',
    'validation',
    'transformation'
  ];

  const report = {
    timestamp: new Date().toISOString(),
    metrics: operations.map(op => analyzer.getStats(op))
  };

  fs.writeFileSync(
    `./reports/performance_${Date.now()}.json`,
    JSON.stringify(report, null, 2)
  );
}

// 使用示例
setupPerformanceMonitoring()
  .then(sage => {
    console.log('性能监控系统已启动');
    
    // 示例操作
    sage.validate('./data/sample.json', schema)
      .then(result => {
        console.log('验证完成');
      });
  })
  .catch(error => {
    console.error('启动性能监控失败:', error);
  });
```

## 最佳实践

1. **监控策略**
   - 确定关键性能指标
   - 设置合理的阈值
   - 实现分级告警

2. **数据收集**
   - 收集足够详细的指标
   - 定期清理历史数据
   - 实现采样策略

3. **性能优化**
   - 使用缓存减少重复计算
   - 实现批处理减少IO
   - 优化内存使用

4. **报告和分析**
   - 生成定期报告
   - 实现趋势分析
   - 提供可视化界面

5. **系统维护**
   - 定期检查监控系统
   - 更新性能基准
   - 优化告警规则

## 注意事项

1. 监控系统本身的性能开销
2. 数据存储和清理策略
3. 告警信息的准确性
4. 缓存策略的合理性
5. 采样率的平衡
