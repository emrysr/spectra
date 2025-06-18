<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ModesLink from './ModesLink.vue';
import { useModesMenuStore } from '@/stores/modes';
import { computed } from 'vue';
const store = useModesMenuStore();
const { menu } = storeToRefs(store);
const links = computed(() => {
    return menu.value.filter(i => i.parent === 'RF').map(i => i.key)
})
</script>

<template>
    <div class="tabs is-toggle is-fullwidth">
        <ul>
            <ModesLink v-for="(link, index) in links" :to="link" #="{ navigate, isExactlyActive, label }">
                <li :class="{ 'is-active': isExactlyActive }">
                    <a @click="navigate">{{ label }}</a>
                </li>
            </ModesLink>
        </ul>
    </div>
</template>