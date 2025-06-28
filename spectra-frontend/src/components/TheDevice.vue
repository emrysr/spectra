<script setup lang="ts">
import Stack from './Stack.vue';
import ControlRack from './ControlRack.vue';
import InputRack from './InputRack.vue';
import TopRack from './TopRack.vue';
import BottomRack from './BottomRack.vue';
</script>
<template>
    <div class="the-device">
        <Stack class="top-stack" name="top">
            <TopRack />
        </Stack>
        <Stack class="middle-stack" name="middle">
            <ControlRack />
        </Stack>
        <Stack class="inputs-stack" name="inputs">
            <InputRack />
        </Stack>
        <Stack class="bottom-stack" name="bottom">
            <BottomRack />
        </Stack>
    </div>
</template>

<style lang="css">
.the-device {
    display: flex;
    border-radius: 1px;
    min-height: 80vh;
    flex-direction: column;
    gap: 1rem;
}

.top-stack__grid {
    display: grid;
    grid-template-areas:
        "left right-top"
        "left right-bottom";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    width: 100%;
    height: 100%;
    gap: 10px;
    aspect-ratio: 3;

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
        flex-direction: column;
    }

    .grid-right-bottom {
        grid-area: right-bottom;
        /* For visualization */
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
}
</style>