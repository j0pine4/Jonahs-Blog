---
title: Creating a Dynamic Video Player for Nuxt Studio
date: 2026-01-13T05:00:00.000Z
description: Learn how to make a video player component that switches embeded players based on the url given
image: /articles/custom-video-component/custom-video-component-thumbnail.jpg
navigation:
  description: Learn how to make a video player component that switches embeded players based on the url given
tags:
  - Programming
  - Technical
  - Web Design
subtitle: Learn how to make a video player component that switches embeded players based on the url given
---

## Introduction

Nuxt Studio is amazing. It bridges the gap between no-code CMS solutions such as Wordpress or Squarespace and fully custom web applications built by frameworks such as React or Vue. 

Nuxt studio is a standalone module that you can add to any Nuxt Content based site and edit your markdown files using their all new visual editor.

> Self-hosted CMS for your Nuxt Content website. Edit content visually, manage media, and publish changes from your production site.

The release of this new module honestly inspired me to make this very blog so thanks Nuxt Studio!

## Custom Components

The true power of Nuxt Content is that you can leverage the power of Vue/Nuxt from within your markdown files.

For example here is a "callout" that I can customize and use inside this blog post. This is just a vue component that I can use.

::callout{color="warning"}
Here is my super cool callout
::

What's extra cool is that I can make my own components and use them as well.

## What are we trying to do?

My blog can be technical at times and I like to include videos describing various topics. These videos aren't saved to the site, but links from other players such as Youtube or Vimeo.

I could just provide a boring old link to the video but I want my posts to be more exciting than that! The reader should be able to watch without leaving.

### Multiple Players

That brings us to our main issue.  There are MANY video players/services out there. My goal was to use a single custom component that could scale to any number of players and only require a single url. Youtube? Vimeo? Something else? Doesn't matter. 

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
