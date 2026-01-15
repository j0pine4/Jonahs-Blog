<template>
    <iframe width="100%" height="400" :src="`https://www.youtube.com/embed/${parseYoutubeURL(props.url)}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</template>

<script setup lang="ts">

const props = defineProps<{
    url: string
}>();

const parseYoutubeURL = (url: string) => {

    try {
        const parsedUrl = new URL(url);

        // youtu.be/VIDEO_ID
        if (parsedUrl.hostname === 'youtu.be') {
            return parsedUrl.pathname.slice(1);
        }

        // youtube.com/watch?v=VIDEO_ID
        if (parsedUrl.searchParams.has('v')) {
            return parsedUrl.searchParams.get('v');
        }

        // youtube.com/embed/VIDEO_ID
        // youtube.com/shorts/VIDEO_ID
        const pathMatch = parsedUrl.pathname.match(
            /^\/(embed|shorts)\/([^/?]+)/
        );

        if (pathMatch) {
            return pathMatch[2];
        }

        console.log('Returning null')
        return null;
    } catch (e) {
        console.log('Error: Returning null')
        console.log(e)
        return null;
    }

}

</script>