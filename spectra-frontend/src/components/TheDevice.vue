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
        <Stack class="top-stack" name="top">
            <div class="grid-container">
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
        </Stack>
        <Stack class="middle-stack" name="middle">
            <TheControls />
        </Stack>
        <Stack class="inputs-stack" name="inputs">
            <InputRack />
        </Stack>
        <Stack class="bottom-stack" name="bottom">
            <TheBreadboard />
        </Stack>
    </div>
</template>

<style lang="css">
.the-device {
    display: flex;
    outline: 8px solid hotpink;
    min-height: 80vh;
    flex-direction: column;
    gap: 1rem;
}


.grid-container {
    display: grid;
    grid-template-areas:
        "left right-top"
        "left right-bottom";
    grid-template-columns: 50% 1fr;
    grid-template-rows: 33.33% 1fr;
    width: 100%;
    height: 100%;
    gap: 10px;
}

.grid-left {
    grid-area: left;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.grid-right-top {
    grid-area: right-top;
    /* For visualization */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.grid-right-bottom {
    grid-area: right-bottom;
    /* For visualization */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* Styles for other stacks if needed */
.middle-stack,
.inputs-stack,
.bottom-stack {
    padding: 1rem;
    border: 1px solid #ccc;
    /* For visualization */
}
</style>