import { defineConfig } from 'vitepress';

const sidebar = (prefix, labels) => [
  {
    text: labels.guide,
    items: [
      { text: labels.start, link: `${prefix}/getting-started` },
      { text: labels.settings, link: `${prefix}/theme-settings` },
      { text: labels.colors, link: `${prefix}/colors-and-buttons` },
      { text: labels.sections, link: `${prefix}/sections` },
      { text: labels.header, link: `${prefix}/header-and-navigation` },
      { text: labels.shopping, link: `${prefix}/products-and-cart` },
      { text: labels.faq, link: `${prefix}/faq` },
    ],
  },
];

export default defineConfig({
  title: 'Mosaic',
  description: 'Documentation for the Mosaic Shopify theme',
  base: '/mosaic-docs/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: { search: { provider: 'local' } },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [{ text: 'Guide', link: '/getting-started' }],
        sidebar: sidebar('', {
          guide: 'Guide',
          start: 'Getting started',
          settings: 'Theme settings',
          colors: 'Colors and buttons',
          sections: 'Sections and blocks',
          header: 'Header and navigation',
          shopping: 'Products and cart',
          faq: 'FAQ',
        }),
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [{ text: '使用指南', link: '/zh/getting-started' }],
        sidebar: sidebar('/zh', {
          guide: '使用指南',
          start: '快速开始',
          settings: '主题设置',
          colors: '颜色与按钮',
          sections: '区块与内容块',
          header: '导航栏与菜单',
          shopping: '商品与购物车',
          faq: '常见问题',
        }),
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新' },
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
      },
    },
  },
});
