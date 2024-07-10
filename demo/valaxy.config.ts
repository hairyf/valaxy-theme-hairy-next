import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-hairy'
import { addonAlgolia } from 'valaxy-addon-algolia'
import { addonWaline } from 'valaxy-addon-waline'
import { addonMeting } from 'valaxy-addon-meting'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'hairy',

  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about',
      },
      {
        text: 'Posts',
        link: '/archives/',
      },
      {
        text: 'Github',
        link: 'https://github.com/TuiMao233/valaxy-theme-hairy',
      },
    ],
    footer: {
      since: 2016,
      beian: {
        enable: false,
        icp: '苏ICP备xxxxxx号',
      },
      powered: true,
    },
  },

  markdown: {
    theme: 'material-theme-ocean',
  },

  addons: [
    addonAlgolia({
      appId: '0B89DLR0Q9',
      apiKey: '756e8e048364fae43536c1d0000734a6',
      indexName: 'hairy.blog',
    }),
    addonWaline({
      comment: true,
      serverURL: 'https://blog-waline-hairy.vercel.app',
      emoji: [
        '//unpkg.com/@waline/emojis@1.0.1/weibo',
        '//unpkg.com/@waline/emojis@1.0.1/bilibili',
      ],
      pageview: true,
    }),
    addonMeting({
      global: true,
      props: {
        id: '5312894314',
        type: 'playlist',
        autoplay: true,
        theme: 'var(--hy-c-primary)',
      },
    }),
  ],
})
