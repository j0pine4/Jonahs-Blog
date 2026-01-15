<template>
    <component :is="determineVideoPlayer()" v-bind="props"></component>
</template>

<script setup lang="ts">

import { resolveComponent } from 'vue'

const props = defineProps<{
    url: string
}>();

const youtubePlayer = resolveComponent('video-player-youtube');
const vimeoPlayer = resolveComponent('video-player-vimeo');

const videoPlayerIndex = {
    vimeo: vimeoPlayer,
    youtube: youtubePlayer
};

type VideoProvider = keyof typeof videoPlayerIndex;

const determineVideoPlayer = () => {
    const { hostname } = new URL(props.url);

    const key = (Object.keys(videoPlayerIndex) as VideoProvider[]).find(provider => hostname.toLowerCase().includes(provider));

    return key ? videoPlayerIndex[key] : undefined;
};

</script>