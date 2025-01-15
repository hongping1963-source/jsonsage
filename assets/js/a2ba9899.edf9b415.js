"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6560],{47717:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var i=s(22159),l=s(74848),r=s(28453);const a={slug:"introducing-jsonsage",title:"\u4ecb\u7ecd JsonSage\uff1a\u667a\u80fd\u7684JSON\u5904\u7406\u5de5\u4f5c\u6d41\u7cfb\u7edf",authors:["hongping"],tags:["jsonsage","json","workflow","automation"]},o=void 0,t={authorsImageUrls:[void 0]},c=[{value:"\u4e3a\u4ec0\u4e48\u521b\u5efa JsonSage\uff1f",id:"\u4e3a\u4ec0\u4e48\u521b\u5efa-jsonsage",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"1. \u667a\u80fd\u76d1\u63a7",id:"1-\u667a\u80fd\u76d1\u63a7",level:3},{value:"2. \u5f3a\u5927\u7684\u9a8c\u8bc1",id:"2-\u5f3a\u5927\u7684\u9a8c\u8bc1",level:3},{value:"3. \u7075\u6d3b\u7684\u8f6c\u6362",id:"3-\u7075\u6d3b\u7684\u8f6c\u6362",level:3},{value:"4. \u6027\u80fd\u76d1\u63a7",id:"4-\u6027\u80fd\u76d1\u63a7",level:3},{value:"\u6027\u80fd\u548c\u53ef\u9760\u6027",id:"\u6027\u80fd\u548c\u53ef\u9760\u6027",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5feb\u901f\u5f00\u59cb",id:"\u5feb\u901f\u5f00\u59cb",level:2},{value:"\u8def\u7ebf\u56fe",id:"\u8def\u7ebf\u56fe",level:2},{value:"\u8d21\u732e",id:"\u8d21\u732e",level:2},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.p,{children:"\u6211\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 JsonSage \u7684\u9996\u6b21\u53d1\u5e03\uff01JsonSage \u662f\u4e00\u4e2a\u667a\u80fd\u7684 JSON \u5904\u7406\u5de5\u4f5c\u6d41\u7cfb\u7edf\uff0c\u65e8\u5728\u7b80\u5316 JSON \u6570\u636e\u7684\u9a8c\u8bc1\u3001\u8f6c\u6362\u548c\u76d1\u63a7\u8fc7\u7a0b\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4e3a\u4ec0\u4e48\u521b\u5efa-jsonsage",children:"\u4e3a\u4ec0\u4e48\u521b\u5efa JsonSage\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u73b0\u4ee3\u8f6f\u4ef6\u5f00\u53d1\u4e2d\uff0cJSON \u5df2\u7ecf\u6210\u4e3a\u6700\u5e7f\u6cdb\u4f7f\u7528\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u7136\u800c\uff0c\u968f\u7740\u9879\u76ee\u89c4\u6a21\u7684\u589e\u957f\uff0cJSON \u6570\u636e\u7684\u5904\u7406\u53d8\u5f97\u8d8a\u6765\u8d8a\u590d\u6742\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u9700\u8981\u5b9e\u65f6\u76d1\u63a7\u591a\u4e2a JSON \u6587\u4ef6\u7684\u53d8\u5316"}),"\n",(0,l.jsx)(e.li,{children:"\u9700\u8981\u9a8c\u8bc1\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784"}),"\n",(0,l.jsx)(e.li,{children:"\u9700\u8981\u8fdb\u884c\u5404\u79cd\u6570\u636e\u8f6c\u6362"}),"\n",(0,l.jsx)(e.li,{children:"\u9700\u8981\u786e\u4fdd\u9ad8\u6027\u80fd\u548c\u53ef\u9760\u6027"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"JsonSage \u5c31\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e9b\u6311\u6218\u800c\u521b\u5efa\u7684\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u4e3b\u8981\u7279\u6027",children:"\u4e3b\u8981\u7279\u6027"}),"\n",(0,l.jsx)(e.h3,{id:"1-\u667a\u80fd\u76d1\u63a7",children:"1. \u667a\u80fd\u76d1\u63a7"}),"\n",(0,l.jsx)(e.p,{children:"JsonSage \u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u6587\u4ef6\u76d1\u63a7\u529f\u80fd\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"const sage = new JsonSage({\r\n  watchPath: './data',\r\n  patterns: ['**/*.json'],\r\n  exclude: ['**/node_modules/**']\r\n});\r\n\r\nsage.on('fileChange', (event) => {\r\n  console.log(`\u6587\u4ef6 ${event.path} \u53d1\u751f\u53d8\u5316`);\r\n});\n"})}),"\n",(0,l.jsx)(e.h3,{id:"2-\u5f3a\u5927\u7684\u9a8c\u8bc1",children:"2. \u5f3a\u5927\u7684\u9a8c\u8bc1"}),"\n",(0,l.jsx)(e.p,{children:"\u652f\u6301\u590d\u6742\u7684\u9a8c\u8bc1\u89c4\u5219\u548c\u81ea\u5b9a\u4e49\u9a8c\u8bc1\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"const schema = {\r\n  type: 'object',\r\n  properties: {\r\n    name: { type: 'string' },\r\n    age: { type: 'number' },\r\n    email: { type: 'string', format: 'email' }\r\n  },\r\n  required: ['name', 'email']\r\n};\r\n\r\nconst result = await sage.validate('./user.json', schema);\n"})}),"\n",(0,l.jsx)(e.h3,{id:"3-\u7075\u6d3b\u7684\u8f6c\u6362",children:"3. \u7075\u6d3b\u7684\u8f6c\u6362"}),"\n",(0,l.jsx)(e.p,{children:"\u8f7b\u677e\u5b9e\u73b0\u6570\u636e\u8f6c\u6362\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"const rules = {\r\n  'name': 'userName',\r\n  'age': (value) => Number(value),\r\n  'contacts': (data) => ({\r\n    email: data.email.toLowerCase(),\r\n    phone: formatPhoneNumber(data.phone)\r\n  })\r\n};\r\n\r\nconst result = await sage.transform('./data.json', rules);\n"})}),"\n",(0,l.jsx)(e.h3,{id:"4-\u6027\u80fd\u76d1\u63a7",children:"4. \u6027\u80fd\u76d1\u63a7"}),"\n",(0,l.jsx)(e.p,{children:"\u5185\u7f6e\u6027\u80fd\u76d1\u63a7\u529f\u80fd\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"sage.on('performanceMetric', (metric) => {\r\n  console.log('\u64cd\u4f5c:', metric.operation);\r\n  console.log('\u8017\u65f6:', metric.duration, 'ms');\r\n  console.log('\u5185\u5b58\u4f7f\u7528:', metric.memoryUsage, 'MB');\r\n});\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6027\u80fd\u548c\u53ef\u9760\u6027",children:"\u6027\u80fd\u548c\u53ef\u9760\u6027"}),"\n",(0,l.jsx)(e.p,{children:"JsonSage \u5728\u8bbe\u8ba1\u65f6\u5c31\u8003\u8651\u5230\u4e86\u6027\u80fd\u548c\u53ef\u9760\u6027\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u9ad8\u6548\u7684\u6587\u4ef6\u76d1\u63a7"}),"\uff1a\u4f7f\u7528\u9ad8\u6548\u7684\u6587\u4ef6\u7cfb\u7edf\u4e8b\u4ef6\u76d1\u542c"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u667a\u80fd\u7f13\u5b58"}),"\uff1a\u907f\u514d\u91cd\u590d\u5904\u7406"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u9519\u8bef\u6062\u590d"}),"\uff1a\u5185\u7f6e\u91cd\u8bd5\u673a\u5236"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u8d44\u6e90\u4f18\u5316"}),"\uff1a\u63a7\u5236\u5185\u5b58\u4f7f\u7528"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,l.jsx)(e.p,{children:"JsonSage \u9002\u7528\u4e8e\u591a\u79cd\u573a\u666f\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u914d\u7f6e\u7ba1\u7406"}),"\uff1a\u76d1\u63a7\u548c\u9a8c\u8bc1\u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6570\u636e\u8f6c\u6362"}),"\uff1aAPI \u54cd\u5e94\u683c\u5f0f\u8f6c\u6362"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6570\u636e\u9a8c\u8bc1"}),"\uff1a\u7528\u6237\u8f93\u5165\u9a8c\u8bc1"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"\u6027\u80fd\u76d1\u63a7"}),"\uff1aJSON \u5904\u7406\u6027\u80fd\u5206\u6790"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5feb\u901f\u5f00\u59cb",children:"\u5feb\u901f\u5f00\u59cb"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u5b89\u88c5\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"npm install @zhanghongping/json-sage-workflow\n"})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:"\u57fa\u672c\u4f7f\u7528\uff1a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-typescript",children:"import { JsonSage } from '@zhanghongping/json-sage-workflow';\r\n\r\nconst sage = new JsonSage({\r\n  watchPath: './data',\r\n  validateOnChange: true\r\n});\r\n\r\nsage.on('validationError', (error) => {\r\n  console.error('\u9a8c\u8bc1\u9519\u8bef:', error);\r\n});\r\n\r\nawait sage.start();\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8def\u7ebf\u56fe",children:"\u8def\u7ebf\u56fe"}),"\n",(0,l.jsx)(e.p,{children:"\u6211\u4eec\u8ba1\u5212\u5728\u672a\u6765\u6dfb\u52a0\u66f4\u591a\u529f\u80fd\uff1a"}),"\n",(0,l.jsxs)(e.ul,{className:"contains-task-list",children:["\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:[(0,l.jsx)(e.input,{type:"checkbox",disabled:!0})," ","\u56fe\u5f62\u5316\u754c\u9762"]}),"\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:[(0,l.jsx)(e.input,{type:"checkbox",disabled:!0})," ","\u66f4\u591a\u5185\u7f6e\u8f6c\u6362\u5668"]}),"\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:[(0,l.jsx)(e.input,{type:"checkbox",disabled:!0})," ","WebSocket \u652f\u6301"]}),"\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:[(0,l.jsx)(e.input,{type:"checkbox",disabled:!0})," ","\u63d2\u4ef6\u7cfb\u7edf"]}),"\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:[(0,l.jsx)(e.input,{type:"checkbox",disabled:!0})," ","\u66f4\u591a\u8bed\u8a00\u7ed1\u5b9a"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8d21\u732e",children:"\u8d21\u732e"}),"\n",(0,l.jsx)(e.p,{children:"JsonSage \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u6211\u4eec\u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8d21\u732e\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u63d0\u4ea4 Issue"}),"\n",(0,l.jsx)(e.li,{children:"\u63d0\u4f9b PR"}),"\n",(0,l.jsx)(e.li,{children:"\u5b8c\u5584\u6587\u6863"}),"\n",(0,l.jsx)(e.li,{children:"\u5206\u4eab\u4f7f\u7528\u7ecf\u9a8c"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,l.jsxs)(e.p,{children:["JsonSage \u4ecd\u5728\u79ef\u6781\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u671f\u5f85\u542c\u5230\u60a8\u7684\u53cd\u9988\u548c\u5efa\u8bae\u3002\u8bbf\u95ee\u6211\u4eec\u7684 ",(0,l.jsx)(e.a,{href:"https://github.com/hongping1963-source/jsonsage",children:"GitHub \u4ed3\u5e93"})," \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u6216\u67e5\u770b\u6211\u4eec\u7684 ",(0,l.jsx)(e.a,{href:"https://hongping1963-source.github.io/jsonsage/",children:"\u6587\u6863"})," \u5f00\u59cb\u4f7f\u7528\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u8ba9\u6211\u4eec\u4e00\u8d77\u4f7f JSON \u5904\u7406\u53d8\u5f97\u66f4\u7b80\u5355\u3001\u66f4\u667a\u80fd\uff01"})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>a,x:()=>o});var i=s(96540);const l={},r=i.createContext(l);function a(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),i.createElement(r.Provider,{value:e},n.children)}},22159:n=>{n.exports=JSON.parse('{"permalink":"/jsonsage/blog/introducing-jsonsage","editUrl":"https://github.com/hongping1963-source/jsonsage/tree/main/website/blog/2025-01-14-introducing-jsonsage.md","source":"@site/blog/2025-01-14-introducing-jsonsage.md","title":"\u4ecb\u7ecd JsonSage\uff1a\u667a\u80fd\u7684JSON\u5904\u7406\u5de5\u4f5c\u6d41\u7cfb\u7edf","description":"\u6211\u5f88\u9ad8\u5174\u5730\u5ba3\u5e03 JsonSage \u7684\u9996\u6b21\u53d1\u5e03\uff01JsonSage \u662f\u4e00\u4e2a\u667a\u80fd\u7684 JSON \u5904\u7406\u5de5\u4f5c\u6d41\u7cfb\u7edf\uff0c\u65e8\u5728\u7b80\u5316 JSON \u6570\u636e\u7684\u9a8c\u8bc1\u3001\u8f6c\u6362\u548c\u76d1\u63a7\u8fc7\u7a0b\u3002","date":"2025-01-14T00:00:00.000Z","tags":[{"inline":false,"label":"JsonSage","permalink":"/jsonsage/blog/tags/jsonsage","description":"JsonSage\u76f8\u5173\u6587\u7ae0"},{"inline":false,"label":"JSON","permalink":"/jsonsage/blog/tags/json","description":"JSON\u6570\u636e\u5904\u7406\u76f8\u5173\u6587\u7ae0"},{"inline":false,"label":"\u5de5\u4f5c\u6d41","permalink":"/jsonsage/blog/tags/workflow","description":"\u5de5\u4f5c\u6d41\u81ea\u52a8\u5316\u76f8\u5173\u6587\u7ae0"},{"inline":false,"label":"\u81ea\u52a8\u5316","permalink":"/jsonsage/blog/tags/automation","description":"\u81ea\u52a8\u5316\u5904\u7406\u76f8\u5173\u6587\u7ae0"}],"readingTime":3.41,"hasTruncateMarker":false,"authors":[{"name":"Hong Ping","title":"JsonSage \u521b\u5efa\u8005","url":"https://github.com/hongping1963-source","imageURL":"https://github.com/hongping1963-source.png","key":"hongping","page":null}],"frontMatter":{"slug":"introducing-jsonsage","title":"\u4ecb\u7ecd JsonSage\uff1a\u667a\u80fd\u7684JSON\u5904\u7406\u5de5\u4f5c\u6d41\u7cfb\u7edf","authors":["hongping"],"tags":["jsonsage","json","workflow","automation"]},"unlisted":false}')}}]);