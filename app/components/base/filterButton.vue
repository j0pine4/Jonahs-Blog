<template>
    <button
        class="border border-black rounded-full px-3 w-fit py-1 text-nowrap"
        :class="
            isSelected
                ? 'bg-black text-white'
                : 'hover:bg-black hover:text-white'
        "
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    isSelected?: boolean;
}>();
</script>
