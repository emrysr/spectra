<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="notification is-warning">
    <button class="delete"
      @click="e => (e.target as HTMLButtonElement).closest('.notification')?.classList.add('is-hidden')"></button>
    <div v-html="message"></div>
  </div>
</template>
