<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheDevice from './components/TheDevice.vue';
const message = false;
</script>

<template>
  <header class="hero">
    <div class="hero-body">
      <HelloWorld v-if="message" msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <TheDevice>
  </TheDevice>
</template>