import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const env = require('./env');

const config: Config = {
  title: 'JsonSage',
  tagline: '智能的JSON处理工作流系统',
  favicon: 'img/favicon.ico',
  url: 'https://hongping1963-source.github.io',
  baseUrl: '/jsonsage/',
  organizationName: 'hongping1963-source',
  projectName: 'jsonsage',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  customFields: {
    deepseekApiKey: env.DEEPSEEK_API_KEY,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/hongping1963-source/jsonsage/tree/main/website/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/hongping1963-source/jsonsage/tree/main/website/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'JSON,工作流,自动化,监控,验证,转换'},
      {name: 'created', content: '2025-01-14'},
    ],
    image: 'img/jsonsage-social-card.jpg',
    navbar: {
      title: 'JsonSage',
      logo: {
        alt: 'JsonSage Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          to: '/api/introduction',
          label: 'API',
          position: 'left'
        },
        {
          to: '/examples/basic/file-monitoring',
          label: '示例',
          position: 'left'
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/hongping1963-source/jsonsage',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '教程',
              to: '/intro',
            },
            {
              label: 'API参考',
              to: '/api/introduction',
            },
            {
              label: '示例',
              to: '/examples/basic/file-monitoring',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/jsonsage',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/jsonsage',
            },
            {
              label: '推特',
              href: 'https://twitter.com/jsonsage',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hongping1963-source/jsonsage',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} JsonSage. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
} satisfies Config;

export default config;
