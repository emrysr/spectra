<script setup lang="ts">
import { useModesMenuStore } from '@/stores/modes';
import { storeToRefs } from 'pinia';
// import MockChart from './MockChart.vue';
import { computed } from 'vue';
const store = useModesMenuStore();
const { selected } = storeToRefs(store);
const item = computed(() => store.getItem(selected.value));
</script>
<template>
    <section id="waterfall-screen" class="notification">
        <p class="icon-text">
            <span class="icon">{{ item.icon }}</span>
            <span>{{ item.title }}</span>
        </p>
    </section>
</template>
<style>
#waterfall-screen {
    width: 100%;
    height: 100%;
}
</style>