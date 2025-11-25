import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
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
      repo: "ljcoder2015/obsidian-sheet-plus-document",
      repoId: "R_kgDOQckxEg",
      category: "Document Comments",
      categoryId: "DIC_kwDOQckxEs4Cy_yo",
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
  ],
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
});
