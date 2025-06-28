<script setup lang="ts">
import WaterfallScreen from './WaterfallScreen.vue';
import ModeSelector from './ModeSelector.vue';
import MessagesScreen from './MessagesScreen.vue';
</script>
<template>
    <div class="top-stack__grid">
        <div class="grid-left">
            <WaterfallScreen />
        </div>
        <div class="grid-right-top">
            <ModeSelector />
        </div>
        <div class="grid-right-bottom">
            <MessagesScreen />
        </div>
    </div>
</template>