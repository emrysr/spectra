<script setup lang="ts">
import { useModesMenuStore } from '@/stores/modes';
import { storeToRefs } from 'pinia';
import MockChart from './MockChart.vue';
const { selected } = storeToRefs(useModesMenuStore());
</script>
<template>
    <section id="waterfall-screen" class="notification">
        <MockChart></MockChart>
    </section>
</template>
<style>
#waterfall-screen {
    width: 100%;
    height: 100%;
}
</style>