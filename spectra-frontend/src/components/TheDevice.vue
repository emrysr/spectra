<script setup lang="ts">
import Stack from './Stack.vue';
import WaterfallScreen from './WaterfallScreen.vue';
import ModeSelector from './ModeSelector.vue';
import MessagesScreen from './MessagesScreen.vue';
import TheControls from './TheControls.vue';
import InputRack from './InputRack.vue';
import TheBreadboard from './TheBreadboard.vue';
</script>
<template>
    <div class="the-device">
        <Stack name="top">
            <WaterfallScreen />
            <ModeSelector />
            <MessagesScreen />
        </Stack>
        <Stack name="middle">
            <TheControls />
        </Stack>
        <Stack name="inputs">
            <InputRack />
        </Stack>
        <Stack name="bottom">
            <TheBreadboard />
        </Stack>
    </div>
</template>