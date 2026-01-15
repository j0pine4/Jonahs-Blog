<template>
    <!-- <pre> Categories: {{ categoryList }} </pre> -->
    <UCarousel
        v-slot="{ item }"
        :items="categoryList"
        :ui="{ item: 'basis-auto' }"
    >
        <base-filter-button
            @click="
                emits('refresh', item);
                activeButton = item;
            "
            :isSelected="item == activeButton"
            >{{ item }}</base-filter-button
        >
    </UCarousel>
</template>

<script setup lang="ts">
const emits = defineEmits(['refresh', 'all']);
const activeButton = ref('All');

const categoryList = ref([
    'All',
    'Web Design',
    'Programming',
    'Tutorials',
    '3D Art'
]);

</script>
