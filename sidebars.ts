import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '介绍'
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/introduction',
        'api/reference'
      ],
    },
    {
      type: 'category',
      label: '基础示例',
      items: [
        'examples/basic/file-monitoring',
        'examples/basic/validation',
        'examples/basic/transformation'
      ],
    },
    {
      type: 'category',
      label: '进阶示例',
      items: [
        'examples/advanced/custom-validation',
        'examples/advanced/performance-monitoring',
        'examples/advanced/error-handling'
      ],
    }
  ],
};

export default sidebars;
