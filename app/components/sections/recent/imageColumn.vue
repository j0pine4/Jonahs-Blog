<template>
    <div class="flex flex-col grayscale hover:grayscale-0 w-full cursor-pointer group hover:w-[250%] transition-all duration-500 mb-24">
        <img class="h-[650px] w-full object-cover" :src="article.image_url" alt="">
        <div class="flex gap-4 p-2 max-h-[120px] overflow-hidden">
            <h1 class="text-8xl font-bold"> 0{{ index }} </h1>
            <div class="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:duration-700 max-w-[350px]">
                <p class="font-bold text-lg mb-2"> {{ article.title }} </p>
                <!-- <p class="text-neutral-500 text-xs"> {{ article.subtitle }} </p> -->
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import type { Article } from '~/models/Article';

const props = defineProps<{
    article: Article,
    index: number
}>()
</script>