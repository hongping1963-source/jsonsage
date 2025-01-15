/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '快速入门',
    },
    {
      type: 'category',
      label: '基础教程',
      items: [
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-document',
      ],
    },
    {
      type: 'category',
      label: 'API参考',
      items: [
        'api/core',
        'api/plugins',
      ],
    },
    {
      type: 'category',
      label: '示例',
      items: [
        'examples/basic',
        'examples/advanced',
      ],
    },
  ],
};

module.exports = sidebars;
