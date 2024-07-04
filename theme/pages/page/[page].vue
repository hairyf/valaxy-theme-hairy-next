<script setup lang="ts">

</script>

<template>
  <HairyPosts :pagination="true" :cur-page="parseInt(String($route.params.page))" />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
