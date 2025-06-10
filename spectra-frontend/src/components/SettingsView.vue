<script setup lang="ts">
import { useSettingsMenuStore } from '@/stores/settings';
import { storeToRefs } from 'pinia';
import { shallowRef, type Component } from 'vue';
const menu = useSettingsMenuStore();
const { currentComponent, currentView } = storeToRefs(menu);
const component = shallowRef<Component | null>();
currentComponent.value.then(i => component.value = i);
</script>
<template>
    <component :is="component" v-if="currentView" />
</template>