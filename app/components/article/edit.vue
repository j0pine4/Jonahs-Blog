<template>
    <section class="max-w-5xl mx-auto">
        <h1 class="text-2xl font-bold text-center"> {{ mode == 'edit' ? 'Edit' : 'Create' }} Screen Test </h1>
        <quill-editor v-model="content"></quill-editor>

        <pre> {{ content }} </pre>
    </section>
</template>

<script setup lang="ts">
    const props = defineProps<{
        mode: "edit" | "create"
    }>()

    const content = ref("")
</script>