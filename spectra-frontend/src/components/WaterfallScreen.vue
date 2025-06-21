<script setup lang="ts">
import { useModesMenuStore } from '@/stores/modes';
import { storeToRefs } from 'pinia';
import MockChart from './MockChart.vue';
import { computed } from 'vue';
const store = useModesMenuStore();
const { selected } = storeToRefs(store);
const item = computed(() => store.getItem(selected.value));
</script>
<template>
    <section id="waterfall-screen" class="notification">
        <p style="position:absolute">{{ item.icon }}</p>

        <MockChart></MockChart>
        <p>{{ item.title }}</p>
    </section>
</template>
<style>
#waterfall-screen {
    width: 100%;
    height: 100%;
}
</style>