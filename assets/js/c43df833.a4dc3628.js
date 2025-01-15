"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8347],{59211:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"examples/advanced/performance-monitoring","title":"\u6027\u80fd\u76d1\u63a7\u793a\u4f8b","description":"\u672c\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u4f7f\u7528JsonSage\u8fdb\u884c\u6027\u80fd\u76d1\u63a7\u548c\u4f18\u5316\u3002","source":"@site/docs/examples/advanced/performance-monitoring.md","sourceDirName":"examples/advanced","slug":"/examples/advanced/performance-monitoring","permalink":"/jsonsage/examples/advanced/performance-monitoring","draft":false,"unlisted":false,"editUrl":"https://github.com/hongping1963-source/jsonsage/tree/main/website/docs/examples/advanced/performance-monitoring.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u793a\u4f8b","permalink":"/jsonsage/examples/advanced/custom-validation"},"next":{"title":"\u9519\u8bef\u5904\u7406\u793a\u4f8b","permalink":"/jsonsage/examples/advanced/error-handling"}}');var i=r(74848),a=r(28453);const s={},o="\u6027\u80fd\u76d1\u63a7\u793a\u4f8b",c={},l=[{value:"\u57fa\u7840\u76d1\u63a7",id:"\u57fa\u7840\u76d1\u63a7",level:2},{value:"\u64cd\u4f5c\u8ba1\u65f6",id:"\u64cd\u4f5c\u8ba1\u65f6",level:3},{value:"\u57fa\u672c\u6307\u6807\u6536\u96c6",id:"\u57fa\u672c\u6307\u6807\u6536\u96c6",level:3},{value:"\u9ad8\u7ea7\u76d1\u63a7",id:"\u9ad8\u7ea7\u76d1\u63a7",level:2},{value:"\u8be6\u7ec6\u6027\u80fd\u5206\u6790",id:"\u8be6\u7ec6\u6027\u80fd\u5206\u6790",level:3},{value:"\u6027\u80fd\u8b66\u62a5",id:"\u6027\u80fd\u8b66\u62a5",level:3},{value:"\u6027\u80fd\u4f18\u5316",id:"\u6027\u80fd\u4f18\u5316",level:2},{value:"\u7f13\u5b58\u4f18\u5316",id:"\u7f13\u5b58\u4f18\u5316",level:3},{value:"\u5b8c\u6574\u793a\u4f8b",id:"\u5b8c\u6574\u793a\u4f8b",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function m(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u6027\u80fd\u76d1\u63a7\u793a\u4f8b",children:"\u6027\u80fd\u76d1\u63a7\u793a\u4f8b"})}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u4f7f\u7528JsonSage\u8fdb\u884c\u6027\u80fd\u76d1\u63a7\u548c\u4f18\u5316\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u57fa\u7840\u76d1\u63a7",children:"\u57fa\u7840\u76d1\u63a7"}),"\n",(0,i.jsx)(e.h3,{id:"\u64cd\u4f5c\u8ba1\u65f6",children:"\u64cd\u4f5c\u8ba1\u65f6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"import { JsonSage } from '@zhanghongping/json-sage-workflow';\n\nconst sage = new JsonSage({\n  enablePerformanceMonitoring: true\n});\n\n// \u76d1\u542c\u6027\u80fd\u4e8b\u4ef6\nsage.on('performanceMetric', (metric) => {\n  console.log('\u64cd\u4f5c:', metric.operation);\n  console.log('\u8017\u65f6:', metric.duration, 'ms');\n  console.log('\u5185\u5b58\u4f7f\u7528:', metric.memoryUsage, 'MB');\n});\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u57fa\u672c\u6307\u6807\u6536\u96c6",children:"\u57fa\u672c\u6307\u6807\u6536\u96c6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"// \u6536\u96c6\u57fa\u672c\u6027\u80fd\u6307\u6807\nconst metrics = {\n  operations: 0,\n  totalDuration: 0,\n  averageDuration: 0,\n  maxDuration: 0,\n  minDuration: Infinity\n};\n\nsage.on('performanceMetric', (metric) => {\n  metrics.operations++;\n  metrics.totalDuration += metric.duration;\n  metrics.averageDuration = metrics.totalDuration / metrics.operations;\n  metrics.maxDuration = Math.max(metrics.maxDuration, metric.duration);\n  metrics.minDuration = Math.min(metrics.minDuration, metric.duration);\n});\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9ad8\u7ea7\u76d1\u63a7",children:"\u9ad8\u7ea7\u76d1\u63a7"}),"\n",(0,i.jsx)(e.h3,{id:"\u8be6\u7ec6\u6027\u80fd\u5206\u6790",children:"\u8be6\u7ec6\u6027\u80fd\u5206\u6790"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"// \u521b\u5efa\u6027\u80fd\u5206\u6790\u5668\nclass PerformanceAnalyzer {\n  private metrics: Map<string, {\n    count: number;\n    totalDuration: number;\n    maxDuration: number;\n    minDuration: number;\n    memoryUsage: number[];\n  }> = new Map();\n\n  record(operation: string, duration: number, memory: number) {\n    if (!this.metrics.has(operation)) {\n      this.metrics.set(operation, {\n        count: 0,\n        totalDuration: 0,\n        maxDuration: 0,\n        minDuration: Infinity,\n        memoryUsage: []\n      });\n    }\n\n    const metric = this.metrics.get(operation)!;\n    metric.count++;\n    metric.totalDuration += duration;\n    metric.maxDuration = Math.max(metric.maxDuration, duration);\n    metric.minDuration = Math.min(metric.minDuration, duration);\n    metric.memoryUsage.push(memory);\n  }\n\n  getStats(operation: string) {\n    const metric = this.metrics.get(operation);\n    if (!metric) return null;\n\n    return {\n      operation,\n      count: metric.count,\n      averageDuration: metric.totalDuration / metric.count,\n      maxDuration: metric.maxDuration,\n      minDuration: metric.minDuration,\n      averageMemory: average(metric.memoryUsage),\n      maxMemory: Math.max(...metric.memoryUsage)\n    };\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u6027\u80fd\u8b66\u62a5",children:"\u6027\u80fd\u8b66\u62a5"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"// \u8bbe\u7f6e\u6027\u80fd\u8b66\u62a5\nconst performanceThresholds = {\n  duration: 1000, // \u6beb\u79d2\n  memory: 100,    // MB\n  operationsPerSecond: 100\n};\n\nsage.on('performanceMetric', (metric) => {\n  if (metric.duration > performanceThresholds.duration) {\n    console.warn(`\u6027\u80fd\u8b66\u544a: \u64cd\u4f5c ${metric.operation} \u8017\u65f6\u8fc7\u957f (${metric.duration}ms)`);\n  }\n\n  if (metric.memoryUsage > performanceThresholds.memory) {\n    console.warn(`\u6027\u80fd\u8b66\u544a: \u64cd\u4f5c ${metric.operation} \u5185\u5b58\u4f7f\u7528\u8fc7\u9ad8 (${metric.memoryUsage}MB)`);\n  }\n});\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6027\u80fd\u4f18\u5316",children:"\u6027\u80fd\u4f18\u5316"}),"\n",(0,i.jsx)(e.h3,{id:"\u7f13\u5b58\u4f18\u5316",children:"\u7f13\u5b58\u4f18\u5316"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"// \u5b9e\u73b0\u7f13\u5b58\u7cfb\u7edf\nclass CacheManager {\n  private cache: Map<string, {\n    data: any;\n    timestamp: number;\n    hits: number;\n  }> = new Map();\n\n  private maxSize: number;\n  private ttl: number;\n\n  constructor(maxSize = 1000, ttl = 3600000) {\n    this.maxSize = maxSize;\n    this.ttl = ttl;\n  }\n\n  get(key: string) {\n    const item = this.cache.get(key);\n    if (!item) return null;\n\n    if (Date.now() - item.timestamp > this.ttl) {\n      this.cache.delete(key);\n      return null;\n    }\n\n    item.hits++;\n    return item.data;\n  }\n\n  set(key: string, data: any) {\n    if (this.cache.size >= this.maxSize) {\n      this.evictLeastUsed();\n    }\n\n    this.cache.set(key, {\n      data,\n      timestamp: Date.now(),\n      hits: 0\n    });\n  }\n\n  private evictLeastUsed() {\n    let leastUsedKey = null;\n    let leastHits = Infinity;\n\n    for (const [key, item] of this.cache.entries()) {\n      if (item.hits < leastHits) {\n        leastHits = item.hits;\n        leastUsedKey = key;\n      }\n    }\n\n    if (leastUsedKey) {\n      this.cache.delete(leastUsedKey);\n    }\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5b8c\u6574\u793a\u4f8b",children:"\u5b8c\u6574\u793a\u4f8b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-typescript",children:"import { JsonSage } from '@zhanghongping/json-sage-workflow';\nimport * as fs from 'fs';\n\nasync function setupPerformanceMonitoring() {\n  // \u521b\u5efa\u6027\u80fd\u5206\u6790\u5668\n  const analyzer = new PerformanceAnalyzer();\n  \n  // \u521b\u5efa\u7f13\u5b58\u7ba1\u7406\u5668\n  const cache = new CacheManager();\n\n  // \u521b\u5efaJsonSage\u5b9e\u4f8b\n  const sage = new JsonSage({\n    enablePerformanceMonitoring: true,\n    cache: {\n      enabled: true,\n      maxSize: 1000,\n      ttl: 3600000\n    }\n  });\n\n  // \u8bbe\u7f6e\u6027\u80fd\u9608\u503c\n  const thresholds = {\n    duration: 1000,\n    memory: 100,\n    operationsPerSecond: 100\n  };\n\n  // \u76d1\u542c\u6027\u80fd\u6307\u6807\n  sage.on('performanceMetric', (metric) => {\n    // \u8bb0\u5f55\u6307\u6807\n    analyzer.record(\n      metric.operation,\n      metric.duration,\n      metric.memoryUsage\n    );\n\n    // \u68c0\u67e5\u9608\u503c\n    checkThresholds(metric, thresholds);\n\n    // \u8bb0\u5f55\u5230\u6587\u4ef6\n    logMetric(metric);\n  });\n\n  // \u5b9a\u671f\u751f\u6210\u62a5\u544a\n  setInterval(() => {\n    generatePerformanceReport(analyzer);\n  }, 300000); // \u6bcf5\u5206\u949f\n\n  return sage;\n}\n\n// \u68c0\u67e5\u6027\u80fd\u9608\u503c\nfunction checkThresholds(metric: any, thresholds: any) {\n  if (metric.duration > thresholds.duration) {\n    console.warn(`\u6027\u80fd\u8b66\u544a: \u64cd\u4f5c\u8017\u65f6\u8fc7\u957f`, {\n      operation: metric.operation,\n      duration: metric.duration,\n      threshold: thresholds.duration\n    });\n  }\n\n  if (metric.memoryUsage > thresholds.memory) {\n    console.warn(`\u6027\u80fd\u8b66\u544a: \u5185\u5b58\u4f7f\u7528\u8fc7\u9ad8`, {\n      operation: metric.operation,\n      memory: metric.memoryUsage,\n      threshold: thresholds.memory\n    });\n  }\n}\n\n// \u8bb0\u5f55\u6307\u6807\u5230\u6587\u4ef6\nfunction logMetric(metric: any) {\n  const logEntry = {\n    timestamp: new Date().toISOString(),\n    ...metric\n  };\n\n  fs.appendFileSync(\n    './logs/performance.log',\n    JSON.stringify(logEntry) + '\\n'\n  );\n}\n\n// \u751f\u6210\u6027\u80fd\u62a5\u544a\nfunction generatePerformanceReport(analyzer: PerformanceAnalyzer) {\n  const operations = [\n    'fileRead',\n    'fileWrite',\n    'validation',\n    'transformation'\n  ];\n\n  const report = {\n    timestamp: new Date().toISOString(),\n    metrics: operations.map(op => analyzer.getStats(op))\n  };\n\n  fs.writeFileSync(\n    `./reports/performance_${Date.now()}.json`,\n    JSON.stringify(report, null, 2)\n  );\n}\n\n// \u4f7f\u7528\u793a\u4f8b\nsetupPerformanceMonitoring()\n  .then(sage => {\n    console.log('\u6027\u80fd\u76d1\u63a7\u7cfb\u7edf\u5df2\u542f\u52a8');\n    \n    // \u793a\u4f8b\u64cd\u4f5c\n    sage.validate('./data/sample.json', schema)\n      .then(result => {\n        console.log('\u9a8c\u8bc1\u5b8c\u6210');\n      });\n  })\n  .catch(error => {\n    console.error('\u542f\u52a8\u6027\u80fd\u76d1\u63a7\u5931\u8d25:', error);\n  });\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u76d1\u63a7\u7b56\u7565"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u786e\u5b9a\u5173\u952e\u6027\u80fd\u6307\u6807"}),"\n",(0,i.jsx)(e.li,{children:"\u8bbe\u7f6e\u5408\u7406\u7684\u9608\u503c"}),"\n",(0,i.jsx)(e.li,{children:"\u5b9e\u73b0\u5206\u7ea7\u544a\u8b66"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6570\u636e\u6536\u96c6"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6536\u96c6\u8db3\u591f\u8be6\u7ec6\u7684\u6307\u6807"}),"\n",(0,i.jsx)(e.li,{children:"\u5b9a\u671f\u6e05\u7406\u5386\u53f2\u6570\u636e"}),"\n",(0,i.jsx)(e.li,{children:"\u5b9e\u73b0\u91c7\u6837\u7b56\u7565"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6027\u80fd\u4f18\u5316"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4f7f\u7528\u7f13\u5b58\u51cf\u5c11\u91cd\u590d\u8ba1\u7b97"}),"\n",(0,i.jsx)(e.li,{children:"\u5b9e\u73b0\u6279\u5904\u7406\u51cf\u5c11IO"}),"\n",(0,i.jsx)(e.li,{children:"\u4f18\u5316\u5185\u5b58\u4f7f\u7528"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u62a5\u544a\u548c\u5206\u6790"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u751f\u6210\u5b9a\u671f\u62a5\u544a"}),"\n",(0,i.jsx)(e.li,{children:"\u5b9e\u73b0\u8d8b\u52bf\u5206\u6790"}),"\n",(0,i.jsx)(e.li,{children:"\u63d0\u4f9b\u53ef\u89c6\u5316\u754c\u9762"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u7cfb\u7edf\u7ef4\u62a4"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5b9a\u671f\u68c0\u67e5\u76d1\u63a7\u7cfb\u7edf"}),"\n",(0,i.jsx)(e.li,{children:"\u66f4\u65b0\u6027\u80fd\u57fa\u51c6"}),"\n",(0,i.jsx)(e.li,{children:"\u4f18\u5316\u544a\u8b66\u89c4\u5219"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u76d1\u63a7\u7cfb\u7edf\u672c\u8eab\u7684\u6027\u80fd\u5f00\u9500"}),"\n",(0,i.jsx)(e.li,{children:"\u6570\u636e\u5b58\u50a8\u548c\u6e05\u7406\u7b56\u7565"}),"\n",(0,i.jsx)(e.li,{children:"\u544a\u8b66\u4fe1\u606f\u7684\u51c6\u786e\u6027"}),"\n",(0,i.jsx)(e.li,{children:"\u7f13\u5b58\u7b56\u7565\u7684\u5408\u7406\u6027"}),"\n",(0,i.jsx)(e.li,{children:"\u91c7\u6837\u7387\u7684\u5e73\u8861"}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(m,{...n})}):m(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>s,x:()=>o});var t=r(96540);const i={},a=t.createContext(i);function s(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);