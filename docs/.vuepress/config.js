module.exports = {
  locales: {
    '/en-us/': {
      lang: 'en-US',
      title: 'RAKwireless Document Center',
      description: 'RAKwireless Knowledge Hub'
    },
    '/zh-cn/': {
      lang: 'zh-CN',
      title: 'RAKwireless Document Center',
      description: 'RAKwireless Knowledge Hub'
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  themeConfig: {
    logo: '/assets/rakwireless/rak-blue-dark.svg',
    repo: 'RAKwirelessDev/rakwireless-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    locales: { 
      '/en-us/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page in GitHub',
        lastUpdated: 'Last Updated',
        sidebar: require('./includes/sidebar/en-us'),
        nav: require('./includes/nav/en-us')
      },
      '/zh-cn/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        sidebar: require('./includes/sidebar/zh-cn'),
        nav: require('./includes/nav/zh-cn')
      }
    }
  },
  plugins: {
    'vuepress-plugin-sitemap': {
      hostname: 'https://docs.rakwireless.com/'
    },
    'vuepress-plugin-redirect': {
      locales: true
    },
    'vuepress-plugin-robots': {
      host: "https://docs.rakwireless.com/",
      sitemap: "/sitemap.xml",
      policies: [{
        userAgent: '*',
        disallow: [
          '/'
        ],
        allow: []
      }]
    },
    '@vuepress/plugin-medium-zoom': {},
    '@vuepress/plugin-back-to-top': {}
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-include'))
    }
  }
}
