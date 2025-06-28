<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheDevice from './components/TheDevice.vue';
import router from './router';
import { useModesMenuStore } from './stores/modes';
import { useUiStore } from './stores/app';
import { storeToRefs } from 'pinia';
const store = useUiStore();
const { messages, showPages } = storeToRefs(store);
const message = 'Play Again? - check out <a href="https://github.com/emrysr/spectra">github</a> for progress';
const collapsed = ref(showPages.value);

watch(collapsed, () => {
  console.log('toggle show pages')
  store.toggleShowPages();
})
// const page_list = ['/', 'about']
const page_list = ['']
const pages = router.getRoutes().filter(i => page_list.includes(String(i.name)));

const menu = useModesMenuStore();
menu.selected = 'RF';
</script>

<template>
  <header>
    <nav class="is-pulled-right">
      <button class="button is-small is-ghost" @click="collapsed = false" v-if="collapsed">i</button>
      <button class="button is-small is-ghost" @click="collapsed = true" v-if="!collapsed">x</button>
    </nav>

    <button class="button is-small" @click="store.deleteAllMessages()" v-if="[...messages || []].length > 5">Delete
      All</button>

    <div class="hero is-small" v-if="messages?.length">
      <div class="hero-body has-transitions" v-if="pages.length || message">
        <HelloWorld v-for="message in messages" :message />
        <nav class="tabs">
          <ul>
            <li v-for="page in pages" :class="{ 'is-active': page.name === router.currentRoute.value.name }">
              <RouterLink :to="page.path" @click="collapsed = false">{{ page.name }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <transition mode="out-in">
      <aside id="pages" class="section" v-if="!collapsed">
        <div class="container">
          <router-view v-slot="{ Component, route }">
            <transition mode="out-in" :name="String(route.meta.transition) || ''">
              <component :is="Component" />
            </transition>
          </router-view>
        </div>
      </aside>
    </transition>
  </header>

  <main class="section has-transitions" :class="{ 'py-3': collapsed }">
    <div class="container is-max-desktop">
      <TheDevice />
    </div>
  </main>

</template>

<style lang="scss">
:root {
  --font-size: clamp(4px, 0.5vmax, 10px);
  --bulma-body-font-size: var(--font-size);
  --bulma-size-normal: var(--font-size);
  --bulma-size-small: var(--font-size);
}

@include mixins.tablet {
  :root {
    --font-size: clamp(10px, 1vmax, 13px);
  }
}

button,
a,
input,
select,
textarea {
  -webkit-tap-highlight-color: transparent;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;
}

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