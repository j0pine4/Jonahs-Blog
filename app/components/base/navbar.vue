<template>
    <section class="sticky top-0 z-50 bg-white/50 backdrop-blur-lg">
        <nav class="px-4 lg:px-24 flex justify-between items-center py-6">
            <NuxtLink to="/" class="font-bold text-2xl"> Jonah's Journal </NuxtLink>
    
            <ul class="flex gap-8 items-center">
                <li class="">
                    <NuxtLink to="/"> Home </NuxtLink>
                </li>
                <li class="">
                    <NuxtLink to="#search"> Recent </NuxtLink>
                </li>
                <!-- <li class="hover-active"> Recent </li>
                <li class="hover-active"> Search </li> -->
                <!-- <li class="bg-black text-white px-4 py-2 rounded-full hover-active">
                    Subscribe
                </li> -->
            </ul>
        </nav>
    
        <USeparator v-if="!tight" class="mx-24 mb-12 hidden md:block" />
    </section>

</template>

<script setup lang="ts">

const props = defineProps<{
    tight?: boolean;
}>();

</script>
