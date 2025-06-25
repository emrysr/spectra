<script setup lang="ts">
import { useUiStore } from '@/stores/app';
import type { Message } from '../../env';
const store = useUiStore();

const { message } = defineProps<{ message: Message }>()

// if (message) {
//   store.addMessage(message.message);
// }

const onClose = (e: MouseEvent) => {
  (e.target as HTMLButtonElement).closest('.notification')?.classList.add('is-hidden');
  store.hideMessage(message);
}
</script>

<template>
  <div class="notification is-warning">
    <button class="delete" @click="onClose"></button>
    <div v-html="message"></div>
  </div>
</template>
