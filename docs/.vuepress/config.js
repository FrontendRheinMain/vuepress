module.exports = {
    title: 'Frontend Rhein-Main',
    description: 'community hub for frontenders in rhein main',
    base: '/',
    locales: {
        '/': {
            lang: 'de-DE',
            title: 'Frontend RheinMain'
        }
    },
    themeConfig: {
        logo: '/img/logo.png',
        nav: [],
        sidebar: [
            '/',
            'ferm/about',
            'ferm/newsletter',
            'ferm/meetups',
            'ferm/archive',
            'ferm/videos',
            'ferm/sponsoring',
            'ferm/code-of-conduct',
            'ferm/contact',
            'ferm/imprint'
        ]
    },
    plugins: [
        ['@vuepress/blog', {
            directories: [
                {
                    id: 'post',
                    dirname: '_posts',
                    path: '/post/',
                    itemPermalink: '/post/:year/:month/:day/:slug',
                    pagination: {
                        lengthPerPage: 4,
                    },
                },
            ],
        }]
    ]
};
