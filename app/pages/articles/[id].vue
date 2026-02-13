<template>
    <!-- <base-cursor></base-cursor> -->
    <base-navbar :tight="true"></base-navbar>

    <img
        :src="post?.image"
        class="h-62.5 md:h-87.5 w-full object-cover mb-12"
        alt=""
    />


    <UContainer class="mb-12">

        <UPage :ui="{right: 'lg:col-span-2 order-last'}">
            <template #left>
                <UContentToc color="warning" :links="post?.body?.toc?.links" />
            </template>


            <div class="w-full">
                <h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
            </div>
            
            <div
                class="w-full flex gap-4 flex-wrap place-content-start mb-8 md:mb-12"
            >
                <base-filter-button v-for="tag in post?.tags">
                    {{ tag }}
                </base-filter-button>
            </div>

            <ContentRenderer v-if="post" :value="post" />

            <USeparator class="my-6"></USeparator>

            <mailchimp></mailchimp>

            <template #right>
                <aside class="flex-col gap-20">
                    <h2 class="text-3xl font-bold mb-2">Recent</h2>
                    <base-thumbnail-card
                        v-for="post in posts"
                        :key="post.id"
                        :post="post"
                    ></base-thumbnail-card>
                </aside>
            </template>
                    
        </UPage>
    </UContainer>

    <base-footer></base-footer>

</template>

<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(`post-${route.path}`, () =>
    queryCollection('articles').path(route.path).first()
);

const { data: posts } = await useAsyncData('articles-recent', () =>
    queryCollection('articles').order('date', 'DESC').limit(5).all()
);

const title = post.value?.seo?.title || post.value?.title
const description = post.value?.seo?.description || post.value?.description


useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

</script>
