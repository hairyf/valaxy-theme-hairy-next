<script lang="ts" setup>
import { onMounted } from 'vue'
import { setupDefaultDark } from '../composables'

onMounted(setupDefaultDark)
</script>

<template>
  <div class="min-h-80vh">
    <slot />
    <HairyDrawer />
  </div>
</template>
