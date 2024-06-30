<script lang="ts" setup>
</script>

<template>
  <div class="min-h-80vh">
    <HairyNavbar />
    <HairyHeader :title="`发表于'${$route.params.year}年${$route.params.month}月'的文章`" />
    <HairyBody>
      <router-view />
    </HairyBody>
    <HairyFooter />
  </div>
</template>
