<template>
    <NuxtLink :to="post.path" class="flex flex-col mb-8 relative hover-active">
        <img
            class="h-37.5 w-full mb-4 relative grayscale hover:grayscale-0 transition-all duration-200 object-cover"
            :src="post.image"
            alt=""
        />
        <div class="flex flex-col">
            <p class="text-xs text-neutral-700"> ({{ formatDate(post.date) }}) </p>
            <h1 class="text-lg font-bold mb-4">{{ post.title }}</h1>
            <p class="text-sm">{{ post.description }}</p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { ArticlesCollectionItem } from '@nuxt/content';

const props = defineProps<{
    post: ArticlesCollectionItem;
}>();

const { formatDate } = useUtils();

</script>
