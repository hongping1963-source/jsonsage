# NPM 包发布指南

本文档详细介绍了如何将 JsonSage 发布到 NPM 仓库的完整流程。

## 前置条件

1. 确保已安装 Node.js 和 npm
2. 拥有 npm 账号（可以在 https://www.npmjs.com/signup 注册）
3. 本地代码已经完成测试和构建

## 发布步骤

### 1. 准备工作

1. 确保 `package.json` 文件包含必要的字段：
   ```json
   {
     "name": "jsonsage",
     "version": "1.0.0",
     "description": "智能的JSON处理工作流系统",
     "main": "dist/index.js",
     "files": [
       "dist",
       "README.md"
     ]
   }
   ```

2. 确保 `.gitignore` 和 `.npmignore` 正确配置，排除不需要发布的文件

3. 确保所有测试通过：
   ```bash
   npm test
   ```

### 2. 登录 NPM

1. 访问 https://www.npmjs.com/ 并登录

2. 生成访问令牌：
   - 进入 https://www.npmjs.com/settings/tokens
   - 点击 "Generate New Token"
   - 选择 "Classic Token"
   - 选择 "Automation" 类型
   - 为令牌添加描述（如 "JsonSage Publishing"）
   - 生成并复制令牌

3. 配置本地认证：
   ```bash
   npm config set //registry.npmjs.org/:_authToken=你的令牌
   ```

### 3. 发布包

1. 首次发布：
   ```bash
   npm publish --access=public
   ```

2. 如果遇到网络问题，可以尝试：
   ```bash
   # 清除 npm 缓存
   npm cache clean --force
   
   # 设置更长的超时时间
   npm config set fetch-timeout 300000
   
   # 重新发布
   npm publish --access=public
   ```

### 4. 版本更新

当需要发布新版本时：

1. 更新版本号：
   ```bash
   npm version patch  # 修复 bug (1.0.0 -> 1.0.1)
   npm version minor  # 新功能 (1.0.0 -> 1.1.0)
   npm version major  # 重大更新 (1.0.0 -> 2.0.0)
   ```

2. 发布新版本：
   ```bash
   npm publish
   ```

### 5. 验证发布

1. 检查包信息：
   ```bash
   npm view jsonsage
   ```

2. 访问包页面：
   https://www.npmjs.com/package/jsonsage

### 6. 包的使用

其他开发者可以通过以下命令安装包：
```bash
npm install jsonsage
```

使用示例：
```javascript
const JsonSage = require('jsonsage');

const sage = new JsonSage({
  // 配置选项
});

sage.start();
```

## 常见问题

1. **403 Forbidden**
   - 检查 token 是否正确配置
   - 确认包名是否可用
   - 确认版本号是否已存在

2. **网络超时**
   - 检查网络连接
   - 尝试使用代理
   - 增加超时时间
   - 清除 npm 缓存后重试

3. **包名冲突**
   - 在 npmjs.com 搜索确认包名是否可用
   - 考虑使用其他包名或添加作用域

## 维护建议

1. 保持文档更新
2. 及时响应 issues 和 pull requests
3. 定期更新依赖
4. 维护 CHANGELOG.md
5. 遵循语义化版本规范

## 相关资源

- [NPM 文档](https://docs.npmjs.com/)
- [语义化版本](https://semver.org/)
- [包的主页](https://www.npmjs.com/package/jsonsage)
- [GitHub 仓库](https://github.com/hongping1963-source/jsonsage)
