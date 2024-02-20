import {defineConfig} from 'vitepress'
import sidebar from "./sidebar";

export default defineConfig({
  title: "daily study",
  lang: 'en-US',
  description: "无 FUCK 说",
  themeConfig: {
    siteTitle: ' ',
    logo: '/coll.png',
    nav: [
      {text: 'HOME', link: '/'},
      {text: '随笔', link: '/article/', activeMatch: '/article/'},
      {text: '工程化', link: '/engineering/', activeMatch: '/engineering/'},
      {text: '前端笔面试题', link: '/interview/', activeMatch: '/interview/'},
      {text: 'JS', link: '/javascript/', activeMatch: '/javascript/'},
      {text: 'Vue', link: '/vue/', activeMatch: '/vue/'},
      // {text: 'React', link: '/react/', activeMatch: '/react/'},
      {text: 'Node', link: '/node/', activeMatch: '/node/'},
      // {text: 'Algorithm', link: '/alg/', activeMatch: '/alg/'},
      // {text: 'Net', link: '/net/', activeMatch: '/net/'},
    ],

    sidebar: sidebar,

    socialLinks: [
      {icon: 'github', link: 'https://github.com/hmfy'}
    ]
  }
})