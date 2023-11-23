import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-hairy'

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
    },
  },
})
