<script lang="ts" setup>
defineProps<{
  type: 'white' | 'normal'
}>()
</script>

<template>
  <a
    class="cursor-pointer transition-all" :class="[
      type === 'white'
        ? 'text-black hover:text-primary dark:text-white'
        : 'text:text-primary-light hover:text-primary-dark',
    ]"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped></style>
