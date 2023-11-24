<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'

const siteConfig = useSiteConfig()
const isAlgolia = computed(() => siteConfig.value.search.type === 'algolia')
const isFuse = computed(() => siteConfig.value.search.type === 'fuse')
</script>

<template>
  <HairyAlgoliaSearch v-if="isAlgolia" />
  <HairyFuseSearch v-if="isFuse" />
</template>
