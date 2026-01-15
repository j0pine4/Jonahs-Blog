<template>
    <section
        class="grid grid-col-6 lg:grid-cols-12 gap-4 lg:gap-8 px-4 lg:px-24"
    >
        <div class="col-span-6 h-[300px] md:h-[60vh] overflow-hidden">
            <sections-hero-image
                v-if="posts"
                :isPrimary="true"
                :post="posts[0]!"
            ></sections-hero-image>
        </div>

        <div class="col-span-6 lg:h-[60vh]">
            <div class="flex flex-col justify-between h-full">
                <div class="flex gap-4 lg:gap-8 h-[30vh] mb-4">
                    <sections-hero-image
                        v-if="posts"
                        :post="posts[1]!"
                    ></sections-hero-image>
                    <sections-hero-image
                        v-if="posts"
                        :post="posts[2]!"
                    ></sections-hero-image>
                </div>

                <p
                    class="font-bold text-2xl lg:text-[2.5vw] py-2 md:h-full mb-4 lg:leading-[2.5vw]"
                >
                    Follow along and learn
                    <span class="underline italic block">with me.</span>
                </p>

                <div
                    class="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 justify-between lg:items-center"
                >
                    <base-button class="w-44 py-4">
                        <NuxtLink to="/#search">Read More</NuxtLink>
                    </base-button>
                    <!-- <p class="">
                        Everything from website design to fitness. Learn something new with me!
                    </p> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('articles-hero', () =>
    queryCollection('articles').order('date', 'DESC').limit(3).all()
);
</script>

<style>
div {
    font-family: Poppins, sans-serif;
}
</style>
