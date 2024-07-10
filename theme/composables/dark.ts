import { useAppStore, useThemeConfig } from 'valaxy'
import { useLocalStorage } from '@vueuse/core'
import type { ThemeConfig } from 'valaxy-theme-hairy'

export function setupDefaultDark() {
  const theme = useThemeConfig<ThemeConfig>()
  const { toggleDark } = useAppStore()
  const local = useLocalStorage('--hairy-mode', '')
  if (theme.value.theme && !local.value) {
    local.value = theme.value.theme
    toggleDark()
  }
}
