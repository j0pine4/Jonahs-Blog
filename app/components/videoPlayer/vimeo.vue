<template>
    <div style="padding:56.25% 0 0 0;position:relative;"><iframe :src="buildVimeoURL" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Pixar BOF SIGGRAPH 2022"></iframe></div>
</template>

<script setup lang="ts">

const props = defineProps<{
    url: string
}>();

const buildVimeoURL = computed( () => {
    const url = new URL(props.url);
    const urlParsed = url.pathname.replaceAll('/', '');

    let outputURL = `https://player.vimeo.com/video/${urlParsed}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`

    return outputURL;
})


</script>