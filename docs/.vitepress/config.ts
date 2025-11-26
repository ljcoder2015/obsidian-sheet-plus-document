import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";

const description = [
  "Welcome to the Obsidian Sheet Plus documentation",
  "Obsidian Sheet Plus is a plugin for Obsidian that allows you to use Google Sheets as a data source for your notes",
  "Obsidian Sheet Plus supports all the features of Google Sheets, such as formulas, charts, and filters",
].toString();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  extends: teekConfig,
  title: "Obsidian Sheet Plus",
  description: description,
  cleanUrls: false,
  lastUpdated: true,
  lang: "en",
  head: [
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:title", content: "Obsidian Sheet Plus | Obsidian Plugin" }],
    ["meta", { property: "og:site_name", content: "Obsidian Sheet Plus" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "ljcoder" }],
    // 禁止浏览器缩放
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    //   },
    // ],
    ["meta", { name: "keywords", description }],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "tip",
      warningLabel: "warning",
      dangerLabel: "danger",
      infoLabel: "info",
      detailsLabel: "details",
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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        link: "/guide/installation",
        activeMatch: "/guide/",
      },
      { text: "price", link: "/price/activate/en", activeMatch: "/price/" },
      {
        text: "archives", link: "/archives" 
      }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ljcoder2015/obsidian-sheet-plus",
      },
    ],
    search: {
      provider: "local",
    },
    editLink: {
      text: "Edit this page on GitHub",
      pattern:
        "https://github.com/ljcoder2015/obsidian-sheet-plus-document/edit/main/docs/:path",
    },

  },
  vite: {
    plugins: [llmstxt() as any],
  },
});
