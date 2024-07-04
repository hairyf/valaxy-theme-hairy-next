<script lang="ts" setup>
import { usePrograms } from '@overlastic/vue'
import { ElImageViewer, imageViewerProps } from 'element-plus/es/components/image-viewer/index'
import 'element-plus/es/components/image-viewer/style/index'
import { onMounted, onUnmounted } from 'vue'

const props = defineProps(imageViewerProps)

const { visible, resolve } = usePrograms()

onMounted(() => {
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="HairyImageViewer fixed inset-0 z-2000">
    <ElImageViewer v-if="visible" v-bind="props" @close="resolve()" />
  </div>
</template>
