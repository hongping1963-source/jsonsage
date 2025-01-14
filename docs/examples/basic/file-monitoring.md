---
sidebar_position: 1
date: 2025-01-14
last_update:
  date: 2025-01-14
---

# JSON文件监控示例

本示例展示如何使用JsonSage监控JSON文件的变化。

## 基本用法

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';

// 创建JsonSage实例
const sage = new JsonSage({
  watchPath: './data',  // 监控的目录
  patterns: ['**/*.json'],  // 匹配的文件模式
  exclude: ['**/node_modules/**']  // 排除的文件
});

// 监听文件变化事件
sage.on('fileChange', (event) => {
  console.log(`文件 ${event.path} 发生变化`);
  console.log('变化类型:', event.type);  // 'add' | 'change' | 'unlink'
  console.log('变化时间:', event.timestamp);
});

// 启动监控
sage.start();
```

## 高级配置

### 自定义过滤器

```typescript
const sage = new JsonSage({
  watchPath: './data',
  filter: (filePath) => {
    // 只监控大小小于1MB的文件
    const stats = fs.statSync(filePath);
    return stats.size < 1024 * 1024;
  }
});
```

### 批量处理

```typescript
sage.on('fileChange', async (event) => {
  if (event.type === 'change') {
    // 批量处理变化的文件
    const files = await sage.getChangedFiles();
    for (const file of files) {
      const content = await fs.promises.readFile(file, 'utf-8');
      // 处理文件内容
      await processJsonContent(content);
    }
  }
});
```

## 实时示例

### 监控配置文件

```typescript
// 监控配置文件变化
const configSage = new JsonSage({
  watchPath: './config',
  patterns: ['config.json'],
  debounceTime: 1000  // 防抖时间
});

configSage.on('fileChange', async (event) => {
  if (event.type === 'change') {
    try {
      // 重新加载配置
      const config = await loadConfig(event.path);
      // 应用新配置
      await applyNewConfig(config);
    } catch (error) {
      console.error('配置更新失败:', error);
    }
  }
});
```

### 监控多个目录

```typescript
const multiSage = new JsonSage({
  watchPaths: ['./data', './config', './temp'],
  patterns: {
    './data': ['**/*.json'],
    './config': ['*.json'],
    './temp': ['temp-*.json']
  }
});
```

## 性能优化

- 使用 `debounceTime` 控制事件触发频率
- 使用 `filter` 过滤不需要处理的文件
- 使用批量处理减少IO操作

## 完整示例

```typescript
import { JsonSage } from '@zhanghongping/json-sage-workflow';
import * as fs from 'fs';
import * as path from 'path';

async function setupJsonMonitoring() {
  const sage = new JsonSage({
    watchPath: './data',
    patterns: ['**/*.json'],
    exclude: ['**/node_modules/**', '**/.*'],
    debounceTime: 1000,
    filter: (filePath) => {
      const stats = fs.statSync(filePath);
      return stats.size < 1024 * 1024;
    }
  });

  sage.on('fileChange', async (event) => {
    console.log(`检测到文件变化: ${event.path}`);

    try {
      const content = await fs.promises.readFile(event.path, 'utf-8');
      const json = JSON.parse(content);

      switch (event.type) {
        case 'add':
          console.log('新文件已添加');
          await processNewFile(json);
          break;
        case 'change':
          console.log('文件已修改');
          await processChangedFile(json);
          break;
        case 'unlink':
          console.log('文件已删除');
          await handleDeletedFile(event.path);
          break;
      }
    } catch (error) {
      console.error('处理文件时出错:', error);
    }
  });

  // 启动监控
  await sage.start();
  console.log('文件监控已启动');

  // 错误处理
  sage.on('error', (error) => {
    console.error('监控错误:', error);
  });

  return sage;
}

// 使用示例
setupJsonMonitoring()
  .then(sage => {
    console.log('监控系统已就绪');
  })
  .catch(error => {
    console.error('启动监控失败:', error);
  });
```

## 注意事项

1. 合理设置 `debounceTime` 避免频繁触发
2. 使用 `exclude` 排除不需要监控的文件
3. 添加错误处理确保系统稳定性
4. 考虑文件大小限制避免内存问题
5. 使用异步操作处理文件内容
