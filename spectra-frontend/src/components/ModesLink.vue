<script setup lang="ts">
import { useModesMenuStore } from '@/stores/modes';
import { computed } from 'vue';
const { to, label: _label } = defineProps<{ to: string, label?: string }>();
const menu = useModesMenuStore();
const key = String(to).toLowerCase();
const navigate = () => menu.navigate(to);

const label = computed(() => _label || menu.getItem(to).title)
const isActive = computed(() => menu.isActive(to));
const isExactlyActive = computed(() => menu.isExactlyActive(to));
</script>
<template>
    <template v-if="$slots.default">
        <slot v-bind="{ key, navigate, isActive, isExactlyActive, label }">
            <a @click="navigate">{{ label }}</a>
        </slot>
    </template>
    <template v-else>
        <button class="button" @click="navigate" :class="{ 'is-active': isActive }">{{ label }}</button>
    </template>
</template>