<script setup lang="ts">
import { useModesMenuStore } from '@/stores/modes';
import { storeToRefs } from 'pinia';
// import MockChart from './MockChart.vue';
import { computed } from 'vue';
const store = useModesMenuStore();
const { selected, currentTopLevel } = storeToRefs(store);
const item = computed(() => store.getItem(selected.value));
const topLevelItem = computed(() => store.topLevel.find(i => currentTopLevel.value === i.key))
</script>
<template>
    <section id="waterfall-screen" class="notification">
        <p class="icon-text is-size-5 is-size-7-mobile">
            <span class="icon is-small" v-if="topLevelItem?.key !== item.key">{{ topLevelItem?.icon }}</span>
            <span class="icon is-small">{{ item.icon }}</span>
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