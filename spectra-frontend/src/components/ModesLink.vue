<script setup lang="ts">
import { useModesMenuStore } from '@/stores/modes';
import { computed } from 'vue';
const { to, label: _label } = defineProps<{ to: string, label?: string }>();
const menu = useModesMenuStore();
const key = String(to).toLowerCase();
const navigate = () => menu.navigate(to);

const item = computed(() => menu.getItem(to));
const label = computed(() => _label || item.value?.short || item.value?.title || key);
const isActive = computed(() => menu.isActive(to));
const isExactlyActive = computed(() => menu.isExactlyActive(to));
</script>
<template>
    <template v-if="$slots.default">
        <slot v-bind="{ key, navigate, isActive, isExactlyActive, label, item }">
            <a @click="navigate">
                {{ label }}
            </a>
        </slot>
    </template>
    <template v-else>
        <button class="button" @click="navigate" type="button" :class="{ 'is-active': isActive }">
            {{ label }}
        </button>
    </template>
</template>