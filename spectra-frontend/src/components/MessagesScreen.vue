<script setup lang="ts">
import { useMessageStore } from '@/stores/messages';
import { storeToRefs } from 'pinia';
const store = useMessageStore();
store.loadMessages();
const { messages } = storeToRefs(store);
</script>
<template>
    <div class="messages-screen">
        <div class="message is-small mb-1" :class="{ 'has-text-right': n % 2 === 0 }" v-for="(message, n) in messages">
            <p class="message-body">
                {{ message }}
            </p>
        </div>
    </div>
</template>
<style>
.messages-screen {
    height: 10rem;
    width: 100%;
    overflow-y: auto;
}
</style>