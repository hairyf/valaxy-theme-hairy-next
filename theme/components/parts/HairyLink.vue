<script lang="ts" setup>
defineProps<{
  type?: 'white' | 'normal'
  bordered?: boolean
}>()
</script>

<template>
  <a
    class="cursor-pointer" :class="[
      type === 'white'
        ? 'text-black hover:text-primary dark:text-white'
        : 'text:text-primary-light hover:text-primary-dark',
      bordered && 'border-b border-dashed hover:border-primary',
    ]"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped></style>
