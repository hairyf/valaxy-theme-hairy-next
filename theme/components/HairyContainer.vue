<script lang="ts" setup>
import { setupDefaultDark } from '../composables'
import { onMounted } from 'vue'

onMounted(setupDefaultDark)
</script>

<template>
  <div class="min-h-80vh">
    <slot />
    <HairyDrawer />
  </div>
</template>
