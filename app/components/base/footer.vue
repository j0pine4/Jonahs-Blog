<template>
    <footer class="w-full bg-black py-12">
        <h1 class="text-white mb-12 text-2xl text-center font-bold">
            <NuxtLink to="/"> Jonah's Journal </NuxtLink>
        </h1>

        <ul
            class="flex gap-4 lg:gap-8 justify-center text-2xl text-white mb-12"
        >
            <li><NuxtLink to="/"> Home </NuxtLink></li>
            <li><NuxtLink to="/#search"> Recent </NuxtLink></li>
            <li><NuxtLink to="/#search"> Search </NuxtLink></li>
            <!-- <li>Subscribe</li> -->
        </ul>

        <UMarquee :overlay="false">
            <h1 class="text-9xl md:text-[10vw] my-12 md:my-24 font-bold text-white">
                Web Design. Fitness. Nutrition. Digital Art. Basketball. Game Design.
            </h1>
        </UMarquee>

        <hr class="bg-white mx-4 lg:mx-24 mb-2" />

        <div class="text-white flex justify-between px-4 lg:px-24 mb-2">
            <p>C 2025 Digital Colony</p>
            <p>Privacy Policy</p>
        </div>
    </footer>
</template>

<script setup lang="ts"></script>
