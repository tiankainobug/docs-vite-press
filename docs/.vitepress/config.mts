import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "笔记",
    description: "记录一下~",
    head: [['link', {rel: 'icon', href: '/favicon.png'}]],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '首页', link: '/'},
            {
                text: '软考',
                items: [
                    {text: '01', link: '/ruankao/01'},
                    {text: '记录', link: '/ruankao/jilu'},
                ]
            },
            {
                text: 'mediaSoup',
                items: [
                    {text: '交互逻辑', link: '/mediaSoup/jiaohu'},
                    {text: 'demo', link: '/mediaSoup/mediasoup-demo'},
                ]
            },
            {
                text: 'vue3源码',
                items: [
                    {text: '笔记', link: '/vue3/01.笔记.md'},
                ]
            }
        ],

        sidebar: {
            '/ruankao/': [
                {
                    text: '软考',
                    items: [
                        {text: '01', link: '/ruankao/01'},
                        {text: '记录', link: '/ruankao/jilu'},
                    ]
                },
            ],
            '/mediaSoup/': [
                {
                    text: 'mediaSoup',
                    items: [
                        {text: '交互逻辑', link: '/mediaSoup/jiaohu'},
                        {text: 'demo', link: '/mediaSoup/mediasoup-demo'},
                    ]
                }
            ],
            '/vue3/': [
                {
                    text: 'vue3源码',
                    items: [
                        {text: '笔记', link: '/vue3/01.笔记.md'},
                    ]
                }
            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        footer: {
            message: 'MIT Licensed | Copyright © 2021 - 2022',
            copyright: '鲁ICP备2024124919号'
        }
    }
})
