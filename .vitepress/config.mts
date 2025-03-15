import { defineConfig } from 'vitepress'
export const baseUrl = '/blog/'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseUrl,
  title: "刘英楠",
  description: "记录王舒彦当狗的日子",
  head: [
    ['link', { rel: 'icon', href: baseUrl + 'favicon.ico' }]
  ],
  srcDir: "src",
  lang: "zh-CN",

  themeConfig: {

    //最后更新时间
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    outline: {
      level: [2, 6], // 显示 2 到 6 级标题作为大纲
      label: '目录' // 大纲标题

    },
    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",
    notFound: {
      title: "界面未找到",
      quote: "您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页"
    },
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    logo: '/image/8858-82f0b068a02e745a3716c87d871cf979.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端', items: [
          {
            text: "Vue",
            link: '/front/vue'
          }, {
            text: "React",
            link: '/front/react'
          },
        ]
      },
     
    ],
    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'Vue', link: '/front/vue' },
          { text: 'React', link: '/front/react' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyn-00001' }
    ]
  },
})
