"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[546],{89256:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"examples/advanced/custom-validation","title":"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u793a\u4f8b","description":"\u672c\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u5728JsonSage\u4e2d\u521b\u5efa\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u3002","source":"@site/docs/examples/advanced/custom-validation.md","sourceDirName":"examples/advanced","slug":"/examples/advanced/custom-validation","permalink":"/jsonsage/examples/advanced/custom-validation","draft":false,"unlisted":false,"editUrl":"https://github.com/hongping1963-source/jsonsage/tree/main/website/docs/examples/advanced/custom-validation.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"JSON\u6570\u636e\u8f6c\u6362\u793a\u4f8b","permalink":"/jsonsage/examples/basic/transformation"},"next":{"title":"\u6027\u80fd\u76d1\u63a7\u793a\u4f8b","permalink":"/jsonsage/examples/advanced/performance-monitoring"}}');var s=r(74848),t=r(28453);const i={},d="\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u793a\u4f8b",l={},c=[{value:"\u81ea\u5b9a\u4e49\u5173\u952e\u5b57",id:"\u81ea\u5b9a\u4e49\u5173\u952e\u5b57",level:2},{value:"\u57fa\u672c\u81ea\u5b9a\u4e49\u5173\u952e\u5b57",id:"\u57fa\u672c\u81ea\u5b9a\u4e49\u5173\u952e\u5b57",level:3},{value:"\u590d\u6742\u9a8c\u8bc1\u903b\u8f91",id:"\u590d\u6742\u9a8c\u8bc1\u903b\u8f91",level:3},{value:"\u81ea\u5b9a\u4e49\u683c\u5f0f",id:"\u81ea\u5b9a\u4e49\u683c\u5f0f",level:2},{value:"\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u683c\u5f0f",id:"\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u683c\u5f0f",level:3},{value:"\u81ea\u5b9a\u4e49\u65e5\u671f\u65f6\u95f4\u683c\u5f0f",id:"\u81ea\u5b9a\u4e49\u65e5\u671f\u65f6\u95f4\u683c\u5f0f",level:3},{value:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u51fd\u6570",id:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u51fd\u6570",level:2},{value:"\u5b8c\u6574\u793a\u4f8b",id:"\u5b8c\u6574\u793a\u4f8b",level:2},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u793a\u4f8b",children:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u793a\u4f8b"})}),"\n",(0,s.jsx)(e.p,{children:"\u672c\u793a\u4f8b\u5c55\u793a\u5982\u4f55\u5728JsonSage\u4e2d\u521b\u5efa\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u5173\u952e\u5b57",children:"\u81ea\u5b9a\u4e49\u5173\u952e\u5b57"}),"\n",(0,s.jsx)(e.h3,{id:"\u57fa\u672c\u81ea\u5b9a\u4e49\u5173\u952e\u5b57",children:"\u57fa\u672c\u81ea\u5b9a\u4e49\u5173\u952e\u5b57"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { JsonSage } from '@zhanghongping/json-sage-workflow';\r\n\r\nconst sage = new JsonSage();\r\n\r\n// \u6dfb\u52a0\u81ea\u5b9a\u4e49\u5173\u952e\u5b57\r\nsage.addKeyword('range', {\r\n  validate: (schema: any, data: number) => {\r\n    return data >= schema.min && data <= schema.max;\r\n  },\r\n  errors: true,\r\n  metaSchema: {\r\n    type: 'object',\r\n    properties: {\r\n      min: { type: 'number' },\r\n      max: { type: 'number' }\r\n    },\r\n    required: ['min', 'max']\r\n  }\r\n});\r\n\r\n// \u4f7f\u7528\u81ea\u5b9a\u4e49\u5173\u952e\u5b57\r\nconst schema = {\r\n  type: 'object',\r\n  properties: {\r\n    age: {\r\n      type: 'number',\r\n      range: { min: 0, max: 120 }\r\n    }\r\n  }\r\n};\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u590d\u6742\u9a8c\u8bc1\u903b\u8f91",children:"\u590d\u6742\u9a8c\u8bc1\u903b\u8f91"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"// \u6dfb\u52a0\u4e2d\u56fd\u8eab\u4efd\u8bc1\u9a8c\u8bc1\r\nsage.addKeyword('isChineseId', {\r\n  validate: (schema: boolean, data: string) => {\r\n    if (!schema) return true;\r\n    \r\n    // \u8eab\u4efd\u8bc1\u53f7\u7801\u9a8c\u8bc1\u903b\u8f91\r\n    const idRegex = /^[1-9]\\d{5}(19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])\\d{3}[\\dX]$/;\r\n    if (!idRegex.test(data)) return false;\r\n    \r\n    // \u6821\u9a8c\u7801\u9a8c\u8bc1\r\n    const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];\r\n    const codes = '10X98765432';\r\n    \r\n    const sum = data.slice(0, 17).split('')\r\n      .reduce((acc, curr, idx) => acc + Number(curr) * weights[idx], 0);\r\n    \r\n    return data[17] === codes[sum % 11];\r\n  },\r\n  errors: {\r\n    message: '\u5fc5\u987b\u662f\u6709\u6548\u7684\u4e2d\u56fd\u8eab\u4efd\u8bc1\u53f7\u7801'\r\n  }\r\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u683c\u5f0f",children:"\u81ea\u5b9a\u4e49\u683c\u5f0f"}),"\n",(0,s.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u683c\u5f0f",children:"\u81ea\u5b9a\u4e49\u5b57\u7b26\u4e32\u683c\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"// \u6dfb\u52a0\u4e2d\u56fd\u624b\u673a\u53f7\u683c\u5f0f\r\nsage.addFormat('chinese-mobile', {\r\n  validate: (data: string) => /^1[3-9]\\d{9}$/.test(data),\r\n  errors: {\r\n    message: '\u5fc5\u987b\u662f\u6709\u6548\u7684\u4e2d\u56fd\u624b\u673a\u53f7\u7801'\r\n  }\r\n});\r\n\r\n// \u6dfb\u52a0\u4e2d\u56fd\u90ae\u653f\u7f16\u7801\u683c\u5f0f\r\nsage.addFormat('chinese-postcode', {\r\n  validate: (data: string) => /^\\d{6}$/.test(data),\r\n  errors: {\r\n    message: '\u5fc5\u987b\u662f\u6709\u6548\u7684\u4e2d\u56fd\u90ae\u653f\u7f16\u7801'\r\n  }\r\n});\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49\u65e5\u671f\u65f6\u95f4\u683c\u5f0f",children:"\u81ea\u5b9a\u4e49\u65e5\u671f\u65f6\u95f4\u683c\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"// \u6dfb\u52a0\u81ea\u5b9a\u4e49\u65e5\u671f\u683c\u5f0f\r\nsage.addFormat('chinese-date', {\r\n  validate: (data: string) => {\r\n    const regex = /^(\\d{4})(-)?(0[1-9]|1[0-2])(-)?(0[1-9]|[12]\\d|3[01])$/;\r\n    if (!regex.test(data)) return false;\r\n    \r\n    const [_, year, __, month, ___, day] = regex.exec(data)!;\r\n    const date = new Date(+year, +month - 1, +day);\r\n    return date.getFullYear() === +year &&\r\n           date.getMonth() === +month - 1 &&\r\n           date.getDate() === +day;\r\n  },\r\n  errors: {\r\n    message: '\u5fc5\u987b\u662f\u6709\u6548\u7684\u65e5\u671f\u683c\u5f0f (YYYY-MM-DD)'\r\n  }\r\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u51fd\u6570",children:"\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u51fd\u6570"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"// \u6dfb\u52a0\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u51fd\u6570\r\nsage.addValidator('isValidPassword', (data: string) => {\r\n  const hasLength = data.length >= 8;\r\n  const hasUpper = /[A-Z]/.test(data);\r\n  const hasLower = /[a-z]/.test(data);\r\n  const hasNumber = /\\d/.test(data);\r\n  const hasSpecial = /[!@#$%^&*]/.test(data);\r\n  \r\n  return {\r\n    valid: hasLength && hasUpper && hasLower && hasNumber && hasSpecial,\r\n    errors: [\r\n      !hasLength && '\u5bc6\u7801\u957f\u5ea6\u81f3\u5c11\u4e3a8\u4f4d',\r\n      !hasUpper && '\u5bc6\u7801\u5fc5\u987b\u5305\u542b\u5927\u5199\u5b57\u6bcd',\r\n      !hasLower && '\u5bc6\u7801\u5fc5\u987b\u5305\u542b\u5c0f\u5199\u5b57\u6bcd',\r\n      !hasNumber && '\u5bc6\u7801\u5fc5\u987b\u5305\u542b\u6570\u5b57',\r\n      !hasSpecial && '\u5bc6\u7801\u5fc5\u987b\u5305\u542b\u7279\u6b8a\u5b57\u7b26'\r\n    ].filter(Boolean)\r\n  };\r\n});\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u5b8c\u6574\u793a\u4f8b",children:"\u5b8c\u6574\u793a\u4f8b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import { JsonSage } from '@zhanghongping/json-sage-workflow';\r\n\r\nasync function setupCustomValidation() {\r\n  const sage = new JsonSage();\r\n\r\n  // \u6dfb\u52a0\u81ea\u5b9a\u4e49\u5173\u952e\u5b57\r\n  sage.addKeyword('range', {\r\n    validate: (schema: any, data: number) => {\r\n      return data >= schema.min && data <= schema.max;\r\n    },\r\n    errors: true,\r\n    metaSchema: {\r\n      type: 'object',\r\n      properties: {\r\n        min: { type: 'number' },\r\n        max: { type: 'number' }\r\n      },\r\n      required: ['min', 'max']\r\n    }\r\n  });\r\n\r\n  // \u6dfb\u52a0\u81ea\u5b9a\u4e49\u683c\u5f0f\r\n  sage.addFormat('chinese-mobile', {\r\n    validate: (data: string) => /^1[3-9]\\d{9}$/.test(data),\r\n    errors: {\r\n      message: '\u5fc5\u987b\u662f\u6709\u6548\u7684\u4e2d\u56fd\u624b\u673a\u53f7\u7801'\r\n    }\r\n  });\r\n\r\n  // \u6dfb\u52a0\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u51fd\u6570\r\n  sage.addValidator('isComplexObject', (data: any) => {\r\n    const checks = {\r\n      hasRequiredFields: Boolean(data.id && data.name),\r\n      hasValidTypes: typeof data.id === 'string' && typeof data.name === 'string',\r\n      hasValidFormat: /^[A-Z]{2}_\\d{6}$/.test(data.id),\r\n      hasValidLength: data.name.length >= 2 && data.name.length <= 50\r\n    };\r\n\r\n    return {\r\n      valid: Object.values(checks).every(Boolean),\r\n      errors: Object.entries(checks)\r\n        .filter(([_, valid]) => !valid)\r\n        .map(([check]) => `Failed check: ${check}`)\r\n    };\r\n  });\r\n\r\n  // \u5b9a\u4e49\u4f7f\u7528\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u7684\u6a21\u5f0f\r\n  const schema = {\r\n    type: 'object',\r\n    properties: {\r\n      id: { type: 'string' },\r\n      name: { type: 'string' },\r\n      age: {\r\n        type: 'number',\r\n        range: { min: 0, max: 120 }\r\n      },\r\n      phone: {\r\n        type: 'string',\r\n        format: 'chinese-mobile'\r\n      },\r\n      metadata: {\r\n        type: 'object',\r\n        isComplexObject: true\r\n      }\r\n    },\r\n    required: ['id', 'name', 'age']\r\n  };\r\n\r\n  // \u9a8c\u8bc1\u793a\u4f8b\r\n  const testData = {\r\n    id: 'USER_001',\r\n    name: '\u5f20\u4e09',\r\n    age: 30,\r\n    phone: '13912345678',\r\n    metadata: {\r\n      id: 'MD_123456',\r\n      name: 'Test Metadata'\r\n    }\r\n  };\r\n\r\n  const result = await sage.validate(testData, schema);\r\n  \r\n  if (result.valid) {\r\n    console.log('\u9a8c\u8bc1\u901a\u8fc7');\r\n  } else {\r\n    console.error('\u9a8c\u8bc1\u5931\u8d25:', result.errors);\r\n  }\r\n\r\n  return sage;\r\n}\r\n\r\n// \u4f7f\u7528\u793a\u4f8b\r\nsetupCustomValidation()\r\n  .then(sage => {\r\n    console.log('\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u8bbe\u7f6e\u5b8c\u6210');\r\n  })\r\n  .catch(error => {\r\n    console.error('\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u5931\u8d25:', error);\r\n  });\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6700\u4f73\u5b9e\u8df5",children:"\u6700\u4f73\u5b9e\u8df5"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6a21\u5757\u5316\u7ec4\u7ec7"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5c06\u76f8\u5173\u7684\u81ea\u5b9a\u4e49\u9a8c\u8bc1\u89c4\u5219\u7ec4\u7ec7\u5728\u4e00\u8d77"}),"\n",(0,s.jsx)(e.li,{children:"\u521b\u5efa\u9a8c\u8bc1\u89c4\u5219\u5e93\u4fbf\u4e8e\u590d\u7528"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u9519\u8bef\u5904\u7406"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u63d0\u4f9b\u6e05\u6670\u7684\u9519\u8bef\u6d88\u606f"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u591a\u8bed\u8a00\u9519\u8bef\u4fe1\u606f"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6027\u80fd\u8003\u8651"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f18\u5316\u590d\u6742\u9a8c\u8bc1\u903b\u8f91"}),"\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u7f13\u5b58\u51cf\u5c11\u91cd\u590d\u9a8c\u8bc1"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u53ef\u7ef4\u62a4\u6027"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e3a\u590d\u6742\u9a8c\u8bc1\u6dfb\u52a0\u8be6\u7ec6\u6ce8\u91ca"}),"\n",(0,s.jsx)(e.li,{children:"\u521b\u5efa\u9a8c\u8bc1\u89c4\u5219\u7684\u5355\u5143\u6d4b\u8bd5"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u6269\u5c55\u6027"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8bbe\u8ba1\u7075\u6d3b\u7684\u9a8c\u8bc1\u63a5\u53e3"}),"\n",(0,s.jsx)(e.li,{children:"\u652f\u6301\u9a8c\u8bc1\u89c4\u5219\u7684\u52a8\u6001\u52a0\u8f7d"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u81ea\u5b9a\u4e49\u5173\u952e\u5b57\u540d\u79f0\u4e0d\u8981\u4e0e\u6807\u51c6JSON Schema\u5173\u952e\u5b57\u51b2\u7a81"}),"\n",(0,s.jsx)(e.li,{children:"\u9a8c\u8bc1\u51fd\u6570\u5e94\u8be5\u662f\u7eaf\u51fd\u6570\uff0c\u907f\u514d\u526f\u4f5c\u7528"}),"\n",(0,s.jsx)(e.li,{children:"\u9519\u8bef\u6d88\u606f\u5e94\u8be5\u6e05\u6670\u660e\u786e\uff0c\u4fbf\u4e8e\u7528\u6237\u7406\u89e3"}),"\n",(0,s.jsx)(e.li,{children:"\u8003\u8651\u9a8c\u8bc1\u89c4\u5219\u7684\u590d\u7528\u6027\u548c\u7ec4\u5408\u6027"}),"\n",(0,s.jsx)(e.li,{children:"\u6ce8\u610f\u9a8c\u8bc1\u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u5904\u7406\u5927\u91cf\u6570\u636e\u65f6"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},28453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>d});var a=r(96540);const s={},t=a.createContext(s);function i(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);