<script lang="ts" setup>
import { onMounted } from 'vue'
import { setupDefaultDark } from '../composables'

import 'element-plus/theme-chalk/base.css'
import 'element-plus/theme-chalk/el-timeline.css'
import 'element-plus/theme-chalk/el-timeline-item.css'

onMounted(setupDefaultDark)
</script>

<template>
  <div class="min-h-80vh">
    <slot />
    <HairyDrawer />
  </div>
</template>
