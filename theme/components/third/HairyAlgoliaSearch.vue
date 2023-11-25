<script lang="ts" setup>
import * as addonAlgolia from 'valaxy-addon-algolia'
import { isEmptyAddon } from 'valaxy'
import { whenever } from '@vueuse/core'

if (isEmptyAddon(addonAlgolia))
  throw new Error('Algolia addon is not installed')

const { loaded, load, dispatchEvent } = addonAlgolia.useAddonAlgolia()

whenever(loaded, dispatchEvent)
</script>

<template>
  <AlgoliaSearchBox v-if="loaded" />
  <HairySearchBtnDisplay v-else @click="load()" />
</template>
