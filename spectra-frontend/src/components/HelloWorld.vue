<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <p class="notification is-warning">{{ msg }}</p>
</template>
