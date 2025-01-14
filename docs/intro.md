---
sidebar_position: 1
---

# JsonSage 介绍

:::info 更新时间
最后更新：2025年1月14日
:::

JsonSage 是一个智能的 JSON 处理工作流系统，旨在简化 JSON 数据的验证、转换和监控过程。

## 主要特性

- **自动化监控**：实时监控 JSON 文件变化，自动触发工作流
- **智能验证**：基于规则和模式的 JSON 数据验证
- **灵活转换**：强大的 JSON 数据转换和处理能力
- **性能优化**：高效处理大规模 JSON 数据
- **可扩展性**：支持自定义插件和工作流

## 快速开始

### 安装

使用 npm 安装 JsonSage：

```bash
npm install jsonsage
```

### 基本使用

```typescript
import { JsonSage } from 'jsonsage';

// 创建实例
const jsonsage = new JsonSage();

// 添加监控
jsonsage.monitor('./data', {
  pattern: '*.json',
  onChange: (file) => {
    console.log(`文件 ${file} 已更新`);
  }
});

// 启动监控
jsonsage.start();
```

## 下一步

- [查看 API 文档](/api/introduction)
- [浏览示例](/examples/basic/file-monitoring)
- [了解最佳实践](/best-practices)
