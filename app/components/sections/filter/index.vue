<template>
    <section id="search" class="mb-24 py-12">
        <!-- Filter Buttons -->
        <div class="px-4 lg:px-24 mb-8 mx-auto">
            <sections-filter-buttons
                @refresh="(e: string) => handleRefresh(e)"
            ></sections-filter-buttons>
        </div>

        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 px-4 sm:px-8 md:px-24"
        >
            <base-card v-for="post in filteredPosts" :post="post"></base-card>
        </div>
    </section>
</template>

<script setup lang="ts">

const { data: posts } = await useAsyncData('articles-all', () =>
    queryCollection('articles').order('date', 'DESC').all()
);
const filteredPosts = ref(posts.value);

// Function to handle category filtering
const handleRefresh = (category: string) => {
    if (category === 'All') {
        filteredPosts.value = posts.value;
    } else {
        filteredPosts.value = posts.value!.filter((post) =>
            post.tags?.includes(category)
        );
    }
};

</script>
