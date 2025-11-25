import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";

const teekConfig = defineTeekConfig({
  teekHome: false,
  codeBlock: {
    enabled: true, // 是否启用新版代码块
    collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    overlay: false, // 代码块底部是否显示展开/折叠遮罩层
    overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
    langTextTransform: "uppercase", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
    copiedDone: TkMessage => TkMessage.success("Copied"), // 复制代码完成后的回调
  },
  articleAnalyze: {
    showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: false, // 是否展示作者
    showCreateDate: false, // 是否展示创建日期
    showUpdateDate: true, // 是否展示更新日期，仅在文章页显示
    showCategory: false, // 是否展示分类
    showTag: false, // 是否展示标签
  },
  comment: {
    provider: "giscus", // 评论区提供者
    // 评论区配置项，根据 provider 不同而不同，具体看对应官网的使用介绍
    options: {
      // giscus 配置，官网：https://giscus.app/zh-CN
      repo: "ljcoder2015/ljcoder2015.github.io",
      repoId: "R_kgDOQXO7zg",
      category: "Document Comments",
      categoryId: "DIC_kwDOQXO7zs4CyWjM",
      lang: "en"
    },
  },
  siteAnalytics: [
    {
      provider: "google",
      options: {
        id: "G-8HXF511DQ9",
      },
    },
  ],
  articleUpdate: {
    enabled: false, // 是否启用文章最近更新栏
  },
  footerInfo: {
    // 主题版权配置
    theme: {
      show: false, // 是否显示主题版权，建议显示
      name: "", // 自定义名称
      link: "", // 自定义链接
    },
    // 博客版权配置
    copyright: {
      show: true, // 是否显示博客版权
      createYear: 2025, // 创建年份
      suffix: "ljcoder", // 后缀
    },
  },
  footerGroup:[
    {
      title: "Contact",
      links: [
        { name: "Issue", link: "https://github.com/ljcoder2015/obsidian-sheet-plus/issues" },
        { name: "Discord", link: "https://discord.gg/fufpbG4tJg" },
        { name: "Email", link: "mailto:ljcoder@163.com" },
      ],
    },
    {
      title: "Activation Code",
      links: [
        { name: "Purchase", link: "/price/activate/en" },
        { name: "购买", link: "/price/activate/zh_cn" },
      ],
    },
  ]
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Obsidian Sheet Plus",
  description: "Obsidian Sheet Plus User Guide",
  extends: teekConfig,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/installation', activeMatch: '/guide/' },
      { text: 'Price', link: '/price/activate/en', activeMatch: '/price/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ljcoder2015/obsidian-sheet-plus' }
    ],
    search: {
      provider: "local",
    },
    editLink: {
      text: "Edit this page on GitHub",
      pattern:
        "https://github.com/ljcoder2015/ljcoder2015.github.io/edit/main/docs/:path",
    },
  },
  sitemap: {
      hostname: "https://docs.ljcoder.com", // ** 换成你的域名
      transformItems: (items) => {
        const permalinkItemBak: typeof items = [];
        // 使用永久链接生成 sitemap
        const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
          .permalinks;
        items.forEach((item) => {
          const permalink = permalinks?.map[item.url];
          if (permalink)
            permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
        });
        return [...items, ...permalinkItemBak];
      },
    },
})