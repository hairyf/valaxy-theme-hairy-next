<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useElementSize, useScroll, whenever } from '@vueuse/core'
import { useSiteConfig } from 'valaxy'
import { useGlobalStore } from '../store'

// get header height
const globalStore = useGlobalStore()
const { headerRef } = storeToRefs(globalStore)
const headerSize = useElementSize(headerRef)
const headerHeight = computed(() => headerSize.height.value)

// get document scroll
const scroll = useScroll(document)
const dire = ref<'top' | 'bottom'>('top')

whenever(() => scroll.directions.top, () => dire.value = 'top')
whenever(() => scroll.directions.bottom, () => dire.value = 'bottom')

const show = computed(() => {
  return scroll.y.value < (headerHeight.value / 2)
  || dire.value === 'top'
})

const config = useSiteConfig()
function hrefToUrl() {
  location.href = config.value.url
}
</script>

<template>
  <div class="fixed w-full h-3.125rem lt-sm:h-3.5rem top-0 z-20 opacity-0 transition-opacity duration-200" :class="[show && 'opacity-100']">
    <div class="mx-auto breakpoint flex relative z-1 h-full">
      <div class="flex items-center lt-sm:order-1 lt-sm:flex-1 justify-center">
        <HairyLink class="px-2.5" type="white" @click="hrefToUrl">
          {{ config.title }}
        </HairyLink>
      </div>
      <div class="flex items-center sm:flex-1">
        <HairyNavExpand class="sm:hidden pl-2 pr-13" />
        <HairyNav class="lt-sm:hidden" />
      </div>
      <div class="flex-center order-1">
        <HairyNavbarToggleDark />
      <!-- TODO: <HairyNavSearch /> -->
      </div>
    </div>

    <HairyNavbarBackground />
  </div>
</template>

<style lang="scss" scoped></style>
