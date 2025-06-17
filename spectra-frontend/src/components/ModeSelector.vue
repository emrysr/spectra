<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ModesLink from './ModesLink.vue';
import { useModesMenuStore } from '@/stores/modes';
const { selected } = storeToRefs(useModesMenuStore())
</script>

<template>
    <div class="tabs block">
        <ul>
            <li>
                <ModesLink to="ism" label="1" class="" />
                <ModesLink to="gps" label="2" class="" />
                <ModesLink to="RF" label="3" class="" />
                <ModesLink to="logic" label="4" class="" />
            </li>
        </ul>
    </div>
</template>