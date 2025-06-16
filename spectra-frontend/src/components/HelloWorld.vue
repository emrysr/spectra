<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <p class="notification is-warning">
    <button class="delete"
      @click="e => (e.target as HTMLButtonElement).closest('.notification')?.classList.add('is-hidden')"></button>
  <div v-html="message"></div>
  </p>
</template>
