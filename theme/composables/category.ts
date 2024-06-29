import type { CategoryList, PostFrontMatter } from 'valaxy'
import { useCategories } from 'valaxy'
import type { MaybeRef } from '@vueuse/core'
import { computed, unref } from 'vue'

export function useCategory(categories: MaybeRef<string[]>) {
  const all = useCategories()

  return computed(() => {
    let parent: PostFrontMatter & Partial<CategoryList> = all.value as any
    for (const category of unref(categories)) {
      for (const [key, value] of (parent.children || new Map([]))) {
        if (key === category)
          parent = (value as PostFrontMatter)
      }
    }
    return parent
  })
}
