<template>
    <NuxtLink
        :to="post.path"
        class="relative w-full h-full black-overlay hover-active group overflow-hidden group"
    >
        <h1
            class="absolute top-0 left-0 text-white p-4 z-10"
            :class="isPrimary ? 'text-4xl' : 'text-lg'"
        >
            {{ post.title }}
        </h1>
        <img
            class="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
            :src="post.image"
            :alt="`Image for story ${post.title}`"
        />
    </NuxtLink>
</template>

<script setup lang="ts">
import type { ArticlesCollectionItem } from '@nuxt/content';

const props = defineProps<{
    post: ArticlesCollectionItem;
    isPrimary?: boolean;
}>();

</script>
