import {defineConfig} from 'vitepress'
const { nav, sidebar } = require('./config.auto.js');

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "笔记",
    description: "记录一下~",
    head: [['link', {rel: 'icon', href: '/favicon.png'}]],
    themeConfig: {
        nav, // 自动生成的导航栏（首页 + 一级目录）
        sidebar, // 自动生成的侧边栏（按导航目录分组）

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        footer: {
            message: 'MIT Licensed | Copyright © 2021 - 2022',
            copyright: '鲁ICP备2024124919号'
        }
    },
    base: "/docs-vite-press/",
})
