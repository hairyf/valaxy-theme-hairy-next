<script lang="ts" setup>
import { usePostList, useTags } from 'valaxy'
import { computed } from 'vue'
import { toArray } from '../../utils'

const posts = usePostList()
const tags = useTags()

const total = computed(() => {
  const categories = posts.value.map(v => toArray(v.categories || [])).filter(v => v.length)
  const maps: string[] = []
  for (const category of categories) {
    let caches: string[] = []
    for (const iterator of category) {
      caches.push(iterator)
      maps.push(caches.join('-'))
    }
    caches = []
  }
  return new Set(maps).size
})
</script>

<template>
  <div class="flex justify-center mt-2">
    <HairyUserStats :count="posts.length" @click="$router.push('/archives/')">
      文章
    </HairyUserStats>
    <div class="w-1px bg-gray bg-opacity-50" />
    <HairyUserStats :count="total" @click="$router.push('/categories/')">
      分类
    </HairyUserStats>
    <div class="w-1px bg-gray bg-opacity-50" />
    <HairyUserStats :count="tags.size" @click="$router.push('/tags/')">
      标签
    </HairyUserStats>
  </div>
  <HairySocialLinks class="mt-5" />
  <HairyMenu class="HairyUserMenu mt-5 flex-col h-auto" />
</template>

<style lang="scss">
  .HairyUserMenu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    .HairyMenuItem {
      padding: 2px;
      width: 100%;
      border: 1px solid transparent;
      > div {
        justify-content: center;
      }
      border-radius: 10px;
      transition: all 0.3s;
      background-color: transparent;
      user-select: none;
    }

    .HairyMenuItem:hover,
    .HairyMenuItem.active {
      background-color: #f4f4f5;
    }
    .HairyMenuItem:active {
      background-color: #efefef;
    }

    .HairyMenuItem.active + .HairyMenuItem {
      border-top-color: transparent;
    }
    .HairyMenuItem:hover + .HairyMenuItem {
      border-top-color: transparent;
    }
  }
  .dark .HairyUserMenu {
    .HairyMenuItem:hover,
    .HairyMenuItem.active {
      background-color: #f4f4f50a;
    }
    .HairyMenuItem:active {
      background-color: #f4f4f521;
    }
  }
</style>
