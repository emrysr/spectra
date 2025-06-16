<script setup lang="ts">
import { RouterLink, RouterView, useRoute, type RouteRecordNameGeneric } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheDevice from './components/TheDevice.vue';
import router from './router';
import { ref } from 'vue';
const message = 'Play Again? - check out <a href="https://github.com/emrysr/spectra">github</a> for progress';
const collapsed = ref(false);

// const page_list = ['/', 'about']
const page_list = ['']
const pages = router.getRoutes().filter(i => page_list.includes(String(i.name)));



</script>

<template>
  <div>
    <nav class="is-pulled-right">
      <button class="button is-small is-ghost" @click="collapsed = false" v-if="collapsed">i</button>
      <button class="button is-small is-ghost" @click="collapsed = true" v-if="!collapsed">x</button>
    </nav>

    <header class="hero is-small">
      <div class="hero-body has-transitions" v-if="pages.length || message">
        <HelloWorld v-if="message" :message />
        <nav class="tabs">
          <ul>
            <li v-for="page in pages" :class="{ 'is-active': page.name === router.currentRoute.value.name }">
              <RouterLink :to="page.path" @click="collapsed = false">{{ page.name }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <transition mode="out-in">
      <aside id="pages" class="section" v-if="!collapsed">
        <div class="container">
          <router-view v-slot="{ Component, route }">
            <transition mode="out-in" :name="String(route.meta.transition) || ''">
              <div>
                <component :is="Component" />
              </div>
            </transition>
          </router-view>
        </div>
      </aside>
    </transition>
  </div>

  <main class="section has-transitions" :class="{ 'py-3': collapsed }">
    <div class="container is-max-desktop">
      <TheDevice />
    </div>
  </main>

</template>

<style>
.has-transitions {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-2rem);
  opacity: 0;
}
</style>