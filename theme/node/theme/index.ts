import type { ResolvedValaxyOptions, ValaxyTheme } from 'valaxy'
import type { ThemeConfig } from '../../types'

/**
 * Default Config
 */
export const defaultThemeConfig: ThemeConfig = {
  colors: {
    primary: '#0078E7',
  },

  footer: {
    since: 2022,
    icon: {
      name: 'i-ri-cloud-line',
      animated: true,
      color: 'var(--va-c-primary)',
      url: 'https://sponsors.yunyoujun.cn',
      title: 'Sponsor YunYouJun',
    },

    powered: true,

    beian: {
      enable: false,
      icp: '',
    },
  },

  nav: [],
}

// write a vite plugin
// https://vitejs.dev/guide/api-plugin.html
export function withThemeConfig(options: ResolvedValaxyOptions<ThemeConfig>): ValaxyTheme {
  const themeConfig = options.config.themeConfig || {}

  return {
    themeConfig: defaultThemeConfig,
    vite: {
      plugins: [
        {
          name: 'vite-plugin-hairy:theme',
          config() {
            return {
              css: {
                preprocessorOptions: {
                  scss: {
                    additionalData: `$c-primary: ${themeConfig.colors?.primary || '#0078E7'} !default;`,
                  },
                },
              },

              valaxy: {},
            }
          },
        },
      ],
    },
    unocss: {
      safelist: generateSafelist(options.config.themeConfig as ThemeConfig),
    },
  }
}

/**
 * generateSafelist by config
 * @param themeConfig
 * @returns
 */
export function generateSafelist(themeConfig: ThemeConfig) {
  const safelist: string[] = []

  const footerIcon = themeConfig.footer?.icon?.name
  if (footerIcon)
    safelist.push(footerIcon)

  return safelist
}
