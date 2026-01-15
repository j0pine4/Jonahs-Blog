<template>
    <NuxtLink :to="post.path" class="flex flex-col mb-6 relative hover-active">
        <img
            class="h-20 w-full mb-1 relative grayscale hover:grayscale-0 transition-all duration-200 object-cover"
            :src="post.image"
            alt=""
        />
        <div class="flex flex-col">
            <p class="text-xs text-neutral-700"> ({{ formatDate(post.date) }}) </p>
            <h1 class="font-bold">{{ post.title }}</h1>
            <p class="text-xs">{{ post.description }}</p>
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
