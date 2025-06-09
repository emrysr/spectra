<script setup lang="ts">
defineProps<{ name: string }>()
</script>
<template>
    <section class="stack" :class="name">
        <slot></slot>
    </section>
</template>