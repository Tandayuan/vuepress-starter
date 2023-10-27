module.exports = {
    title: 'TDYBLog',
    base: '/vuepress-starter/',
    description: '简单的记录技术',
    themeConfig: {
        nav: [
            { text: '我的', link: '/My/log', target: '_self', ref: '' },
            { text: '购物车', link: '/Car/', target: '_self', ref: '' },
        ],
        sidebar: {
            '/Car/': [
                '',
                'one',
                'two'
            ],
            '/My/': [
                'log',
                'one',
                'two'
            ],
            '/': [
                '',
            ]
        } 
    }
}