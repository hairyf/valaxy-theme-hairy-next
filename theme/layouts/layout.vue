<script lang="ts" setup>
defineProps<{
  header?: {
    title?: string
    headline?: string
    description?: string
  }
}>()
</script>

<template>
  <div class="min-h-80vh">
    <HairyNavbar>
      <template #nav>
        <slot name="header-nav" />
      </template>
    </HairyNavbar>
    <HairyHeader>
      <template #description>
        <slot name="header-description" />
      </template>
    </HairyHeader>
  </div>
</template>
