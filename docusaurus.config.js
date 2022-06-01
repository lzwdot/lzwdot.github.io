// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '前端老刘',
  tagline: '记录和分享，每天进步一点点！',
  url: 'https://lzwdot.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lzwdot', // Usually your GitHub org/user name.
  projectName: 'lzwdot.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'zh-Hans', // 显示汉化
    locales: ['zh-Hans'] // 可选语言
  },

  plugins: [
    [require.resolve('docusaurus-plugin-baidu-tongji'), {
      token: '96d91412aff9543cd8e022f381d8bf1c'
    }],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'test',
        path: 'test',
        routeBasePath: 'test',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/lzwdot/lzwdot.github.io',
        },
        blog: {
          blogTitle: '博客',
          blogDescription: '博客',
          blogSidebarTitle: '最新博文',
          blogSidebarCount: 10, // 隐藏博客侧边栏
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/lzwdot/lzwdot.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true, // 可以折叠
      autoCollapseSidebarCategories: true, // 自动折叠所有其他同级类别

      algolia: {
        // The application ID provided by Algolia
        appId: 'ZG54CLJP5I',
        // Public API key: it is safe to commit it
        apiKey: 'ec33706e39f77b9358d60b9dc1dc2916',
        indexName: 'lzwdot',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'lzwdot\\.com|lzwdot\\.github\\.io',
        // Optional: Algolia search parameters
        searchParameters: {},
        //... other Algolia params
      },

      navbar: {
        title: '前端大刘',
        logo: {
          alt: 'Lzw\'s Logo',
          src: 'img/favicon.ico',
        },
        items: [
          { to: '/blog', label: '博客', position: 'left' },
          {
            type: 'doc',
            docId: 'README',
            position: 'left',
            label: '笔记',
          },
          {
            to: '/test',
            label: '测试',
            position: 'left',
            activeBaseRegex: `/test/`,
          },
          { to: '/about', label: '关于', position: 'left' },
          {
            href: 'https://github.com/lzwdot/lzwdot.github.io',
            // label: 'GitHub',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
        hideOnScroll: true, // 滚动隐藏
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}-present Lzw. <a href="https://beian.miit.gov.cn" rel="nofollow" target="_blank">湘ICP备2021015632号.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
