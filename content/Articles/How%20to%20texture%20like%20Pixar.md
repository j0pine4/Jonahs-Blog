---
title: How to texture like Pixar
date: 2025-12-23T05:00:00.000Z
description: Learn how Pixar gives their films life through procedural texturing techniques
image: https://assets.renderman.pixar.com/images-pixar/hoppers-bkg-homepage.webp
seo:
  title: How to texture like Pixar file
  description: L
tags:
  - Technical
  - Art
subtitle: Learn how Pixar gives their films life through procedural texturing techniques
---

## Introduction

I love Pixar and all their movies. My daughter and I have watched Soul probably 10 times this week and we have seen all the classics.

As a former 3D artist I am amazed by all of their films. When I was a professional, I always tried to research the tools they use and how they build their films. That’s why I came across this video years ago and it's been living rent free in my head ever since.

:video-player{url="https://www.youtube.com/watch?v=o_I6jxlN-Ck"}

This has absolutely nothing to do with Pixar and their techniques. Just pure clickbait that acts as a complete beginners guide to PBR textures.

Pixar is fairly open with their process and I have amassed quite the collection of resources/techniques that I can share with you.

## Disclaimer

I have never worked at Pixar. I can’t with 100% certainty say this is the current workflow of the studio. While I can’t guarantee this, I can say that all of the information shared are from either Pixar employees or behind the scenes videos. All sources have been provided to you.

These techniques are software agnostic and can be applied to any project. 

For instance I used many of them here to create this Old Fishing Hut Scene 100% in [Blender](https://www.blender.org/)

![Untitled](/Untitled.png)

## Software

From what I’ve gathered Pixar uses many packages. Most of them are available to the public but they do have some internal tools. This isn’t a full list but here are the most notable ones.

I’ll keep the description of each very brief because this isn’t really about what software they use but it is interesting. Feel free to use whatever package you’d like to build your art. Don’t feel like just because you don’t have access to the same tools, that you can’t make great art using the same principles.

### Maya

This is the primary package they use for 3d modeling. According to this admittedly old video, they rely heavily on crease sets and [OpenSubdiv](https://graphics.pixar.com/opensubdiv/docs/intro.html) to make the objects in their films.

:video-player{url="https://www.youtube.com/watch?v=HC85HF-1qs0"}

Fun fact, the subdivision surface modifier in blender actually uses opensubdiv under the hood [Blender Doc](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/subdivision_surface.html)

### Flow

Flow is an internal tool used by Pixar to create reusable procedural materials for their films.

According to this video it is used for props/background assets but they are hoping to use it more for characters and hero assets in the future. It uses a node based interface which is very similar to the shader graph editor you would use in any modern render engine or 3D package.

:video-player{url="https://vimeo.com/1153663442?share=copy&fl=sv&fe=ci"}

### Presto

While they use maya for modeling, they actually rig and animate using an in-house software called presto.

Here is a demonstration:

:video-player{url="https://www.youtube.com/watch?v=hnFSVx7NhmM"}

### Houdini

Houdini is used at Pixar for special effects like fire, smoke water etc

![luca\_water](/articles/how-to-texture-like-pixar/luca_water.jpg)

### Katana

Katana is used for final lighting and rendering.

:video-player{url="https://www.youtube.com/watch?v=LACmRpMYOak"}

### Renderman

[Renderman](https://renderman.pixar.com/) is where the magic lives. It’s a render engine that is responsible for calculating the final look of their films as well as many other studios go to.

:video-player{url="https://www.youtube.com/watch?v=N0WV0GB91sA"}

It’s seen as the gold standard engine and is available for free for non-commercial use and even works with Blender

:video-player{url="https://www.youtube.com/watch?v=TASCNvMwu70"}

### USD

USD is a file format that works as the glue that connects all of the different software together.

:video-player{url="https://www.youtube.com/watch?v=tH9_JaZs3-E"}

## Modeling

Pixar relies heavily on procedural shading. (More on this later) this requires that the environments contain lots of geometry driven details instead of faking it via textures.

What do I mean by this? Look at some examples of behind the scenes footage from their films.

Look at how they modeled the individual tiles in this bathroom set from Turning Red.

![turningRed\_bathroom](/articles/how-to-texture-like-pixar/turningRed_bathroom.png)

Or check out this behind the scenes look at Luca to see the details they include with the models. Cobblestones, cracks, edge details etc. These are real pieces of geometry instead of a displacement or bump texture.

:video-player{url="https://www.youtube.com/watch?v=RGG0LAxazwg"}

Gaston Ugarte is a modeling artist at Pixar and a glance at his portfolio includes examples of how detailed their production models are. <https://www.tucumanian.com/general-clean>

### Gathering Reference for Pixar Inspired Modeling

I’ve found that the best reference for pixar style scenes are miniatures. Pixar tends to use photorealistic materials with stylized proportions and bevels. Not stylized in a wonky Dr Suess kind of way like illumination does but reality-adjacent.

Look at these examples of miniature sets and see how they compare to Pixar scenes.

Materials are photoreal but things like wood grains are very large, bevels are much more prominent than real world counterparts and items aren’t aligned perfectly to one another.

![Miniatures](/articles/how-to-texture-like-pixar/Miniatures.png)

They look as if a person was gluing them in by hand in a small space.

Here are some screenshots from various Pixar films. You can see how similar the style really is.

![Pixar\_Miniatures](/articles/how-to-texture-like-pixar/Pixar_Miniatures.png)

## Procedural Textures

This is the meat and potatoes of this whole write-up and what the original video didn’t even touch. Proceduralism.

Instead of manually unwrapping and texturing every prop, just make a reusable material that can be applied to any object. This comes in especially handy in very large scenes with many props/objects. Unwrapping a single model isn’t too bad, but unwrapping hundreds or thousands is just too much to handle.

If you are unfamiliar with UV Unwrapping here is a good explanation

:video-player{url="https://www.youtube.com/watch?v=Yx2JNbv8Kpg"}

These procedural materials use geometry based inputs to add details such as dirt, dust, edge damages etc. Here is a great video by Paul Kanyuk describing how pixar uses this technique.

:video-player{url="https://www.youtube.com/watch?v=vYi_Dh8ROSg&t=866s"}

The flow video from earlier also goes into how they are still using proceduralism in their films.

To summarize Paul’s breakdown, there are several categories of geometry driven details you can apply to scenes

### AO

> Ambient Occlusion (AO) is a rendering technique that simulates contact and corner shadows: areas that receive less ambient light are darkened.

![ambient-occlusion-example](/articles/how-to-texture-like-pixar/ambient-occlusion-example.jpg)

What is this useful for? Dirt of course! We can use ambient occlusion as a mask to place dirt or rust where is would naturally occur in real life. 

![AO%20Examples](/articles/how-to-texture-like-pixar/AO%20Examples.png)

### Curvature

Curvature is the inverse of ambient occlusion.

Instead of targeting where objects or faces meet, curvature targets the outer edges.

We can use this to peel back paint where the edges rubbed off or add scratches to corners of wood like they would occur in the real world.

Here is a guide on targeting the edges in blender:

:video-player{url="https://www.youtube.com/watch?v=Aa8gf1pwb4E"}

### Upward Facing

Add things like dust or snow to the tops of your objects automatically. This is especially helpful when set dressing. In a traditional workflow, you cannot rotate an object around after these types of details have been painted.

### World Position

Apply dirt or moss to the bottom of objects based on it’s location in the world.

### Projection Mapping

If they don’t use UV Maps, how do they apply patterns to their objects? 

Project them! This is typically referred to as “Triplanar Mapping” and it is essentially projecting a texture from all axes (XYZ) around your object and blending between them.

### Procedural Noise Patterns

There are limitations when using image maps for texture projection. Resolution for one. You are limited by the size of your texture. Applying a 512x512 texture to a giant wall will be a blurry mess of pixels.

You could tile it but repetition becomes very obvious and that’s assuming the texture is tileable in the first place.

Another solution is procedural noise. These are patterns that are generated by math. They are tileable by default and have no intrinsic resolution so they can be added to any object of any scale.

Below are some common noise patterns that can be used to spice up a material:

### Using a Material Library

:video-player{url="https://vimeo.com/353633376"}

According to their “Technical Toy Story” talk. The general workflow is as follows.

1. Determine a list of materials based on the script
2. Shading artists create reusable materials and save them to a library
3. Modeling artists apply these pre-made shaders to objects in the scene
4. Further refinement is done based on the needs of the particular shot

Pixar loves this so much that it’s built into Renderman. The preset browser allows you to create material libraries and reuse them across projects.

:video-player{url="https://www.youtube.com/watch?v=-OdzP_m7_zs"}

Blender also leans into this concept with the asset library features that go beyond just materials.

:video-player{url="https://www.youtube.com/watch?v=jpz13q52YWM"}

The best part about this approach is that you can reuse these materials across multiple projects or even download third party material libraries like the ones below:

<https://renderman.pixar.com/fun-da-mental-materials>

:video-player{url="https://www.youtube.com/watch?v=10PNjs2FZqc"}
