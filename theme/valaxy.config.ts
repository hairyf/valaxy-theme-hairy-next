import type { DefaultTheme, ValaxyTheme } from 'valaxy'
import { defineTheme, mergeValaxyConfig } from 'valaxy'
import { addonAlgolia } from 'valaxy-addon-algolia'
import { withImageConfig, withThemeConfig } from './node'
import type { ThemeConfig } from './types'

export default defineTheme<ThemeConfig>((options) => {
  let config: ValaxyTheme<ThemeConfig & DefaultTheme.Config> = {
    addons: [
      addonAlgolia(),
    ],
    themeConfig: {
      valaxyDarkOptions: {
        useDarkOptions: { disableTransition: false },
        circleTransition: true,
      },
      outline: 2,
      theme: 'dark',
    },
  }

  config = mergeValaxyConfig(config, withImageConfig(options))
  config = mergeValaxyConfig(config, withThemeConfig(options))

  return config
})
