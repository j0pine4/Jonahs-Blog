---
title: Creating a Dynamic Video Player for Nuxt Studio
date: 2026-01-13T05:00:00.000Z
description: Learn how to make a video player component that switches embeded players based on the url given
image: /articles/custom-video-component/custom-video-component-thumbnail.jpg
navigation:
  description: Learn how to make a video player component that switches embeded players based on the url given
  title: Creating a Dynamic Video Player for Nuxt Studio
tags:
  - Programming
  - Technical
  - Web Design
subtitle: Learn how to make a video player component that switches embeded players based on the url given
---

## Introduction

Nuxt Studio is amazing. It bridges the gap between no-code CMS solutions such as Wordpress or Squarespace and fully custom web applications built in frameworks such as React or Vue. 

[Nuxt studio](https://nuxt.studio/) is a standalone module that you can add to any Nuxt Content based site and edit your posts using their all new visual editor.

> Self-hosted CMS for your Nuxt Content website. Edit content visually, manage media, and publish changes from your production site.

Just install it with a single command

```bash [terminal]
npx nuxt module add nuxt-studio
```

The release of this new module honestly inspired me to make this very blog so thanks Nuxt Studio!

## Custom Components

The true power of Nuxt Content is that you can leverage the power of Vue/Nuxt from within your markdown files.

For example here is a "callout" that I can customize and use inside this blog post. This is just a vue component that I can use anywhere I'd like.

::callout{color="warning"}
Here is my super cool callout
::

What's extra cool is that I can make my own custom components and use them as well.

## What are we trying to do?

My blog can be technical at times and I like to include videos describing various topics. These videos aren't saved to the site, but are links from other players such as Youtube or Vimeo.

I could just provide a boring old [link to the video](https://www.youtube.com/watch?v=dQw4w9WgXcQ) but I want my posts to be more exciting than that! The reader should be able to watch without leaving.

### Multiple Types of Players

That brings us to our main issue.  There are MANY video players/services out there. My goal was to use a single custom component that could scale to any number of players and only require a single URL. Youtube? Vimeo? Something else? Doesn't matter. 

### Example

The two videos below actually use the same parent component. I don't need to care whether the URL I chose came from Vimeo or Youtube. The component switches automatically for me.

:video-player{.mb-4 url="https://www.youtube.com/watch?v=nz7UGgr5epQ"}

:video-player{url="https://vimeo.com/56108219"}

Here it is from a code standpoint, very simple. Just a single URL:

```md
:video-player{url="https://www.youtube.com/watch?v=nz7UGgr5epQ"}
:video-player{url="https://vimeo.com/56108219"}
```

## How it works

There are two parts to this component that make this system work.

1. A main component that decides what player to use based on the URL given
2. The individual player components themselves

### Main Component

This is the central hub that's sole responsibility is to parse the URL and see what player component to use.

```ts [videoPlayer.vue]
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
```

#### Dynamic Component

This is a feature I've never used but Vue 3 has the option of creating [dynamic components](https://vuejs.org/guide/essentials/component-basics#dynamic-components) that are selected based on code based logic instead of nesting v-if statements in the html template.

Using the "\:is" prop, I can tell the \<component> tag what to render through code and switch it in real-time based on any logic I decide.

```ts
<template>
    <component :is="determineVideoPlayer()" v-bind="props"></component>
</template>
```

In this case the "determineVideoPlayer()" function contains the logic used to parse the URL and return the proper component to display

```ts
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
```

Instead of nesting if else statements, I wanted to use a solution that could scale infinitely. I use a videoPlayerIndex object to store a key value pair of providers with their vue component (I'll go over those shortly)

The function checks to see if the particular key (youtube or vimeo in this case) is included in the base url passed to the component. This is the main domain so a long youtube link like "<https://www.youtube.com/watch?v=dQw4w9WgXcQ>" becomes just "[www.youtube.com".]() 

The function sees that there is a key of "youtube" and passes the value of that key to the dynamic component.

I can add an infinite number of keys to this object without ever touching my determineVideoPlayer() again.

### Individual Players

Each player has its own dedicated component. Here are the two I am using. They are just the default boilerplate given by the providers with dynamic URLs.

```ts [vimeo.vue]
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
```

```ts [youtube.vue]
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

        return null;
    } catch (e) {
        return null;
    }

}

</script>
```

## Conclusion

And just like that we have a scalable video player that all I do is pass a single URL. Now this isn't perfect and I could definitely improve on it to make it more production ready but for a personal blog, it does what I need!
