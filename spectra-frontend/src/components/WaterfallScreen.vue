<script setup lang="ts">
import { useModesMenuStore } from '@/stores/modes';
import { storeToRefs } from 'pinia';
import MockChart from './MockChart.vue';
const { selected } = storeToRefs(useModesMenuStore());
</script>
<template>
    <section>
        <MockChart></MockChart>
        <p>s:{{ selected }}</p>
    </section>

</template>