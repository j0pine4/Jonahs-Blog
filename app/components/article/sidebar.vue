<template>
    <nav
        class="flex flex-col w-[350px] p-12 h-screen bg-white sticky top-0 left-0 overflow-y-auto"
    >
        <h1 class="text-2xl font-bold mb-24">NewsSite</h1>

        <ul class="flex flex-col gap-12 text-neutral-500">
            <li
                @click="activeSection = section"
                v-for="section in sectionList"
                :key="section.id"
                class="cursor-pointer"
                :class="activeSection == section ? 'text-black font-bold' : ''"
            >
                <NuxtLink
                    :to="`/article/${section.articleId}/${section.section_id}/${section.section_typeId}`"
                >
                    <div class="flex items-center gap-2">
                        <UIcon :name="`i-heroicons-${section.icon}`"></UIcon>
                        <p class="hover:text-black">{{ section.title }}</p>
                    </div>
                    <!-- <hr class="ml-6 transition-all duration-200" :class="activeSection == section ? 'w-[25px] h-[2px] bg-black' : 'w-0 h-[2px] bg-black'"> -->
                </NuxtLink>
            </li>
        </ul>

        <NuxtLink
            to="/"
            class="flex items-center gap-1 mt-auto hover:font-bold"
        >
            <UIcon name="i-heroicons-arrow-up-left"></UIcon>
            <p>Back to Home</p>
        </NuxtLink>
    </nav>
</template>

<script setup lang="ts">
import type { ArticleSection } from '~/models/Article';

const props = defineProps<{
    sectionList: ArticleSection[] | undefined;
}>();

const route = useRoute();

const activeSection = ref<ArticleSection | undefined>(undefined);

watchEffect(() => {
    if (props.sectionList) {
        let sectionID = Number(route.params.section);
        activeSection.value = props.sectionList.filter(
            (section) => section.section_id == sectionID
        )[0];
    }
});
</script>
