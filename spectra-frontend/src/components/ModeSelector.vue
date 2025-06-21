<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ModesLink from './ModesLink.vue';
import { useModesMenuStore } from '@/stores/modes';
import { computed, nextTick, watch } from 'vue';
const store = useModesMenuStore();
const { nextTopLevel, currentTopLevel, selected } = storeToRefs(store);
const links = computed(() => store.children(currentTopLevel.value));

// watch for changes in selected, if oldvalue is differnt parent, set new parent child to same index
watch(selected, (newValue, oldValue) => {
    const newTopLevel = store.getTopLevel(newValue);
    const oldTopLevel = store.getTopLevel(oldValue || newValue);
    if (oldTopLevel !== newTopLevel) {
        const children = store.children(oldTopLevel)
        const index = children.indexOf(oldValue);
        const child = store.children(newTopLevel)[index];
        store.navigate(child);
    }
});

const linkColourMap = {
    rf: 'is-danger',
    aux: 'is-danger',
} as { [key: string]: string };

</script>

<template>
    <div class="is-rounded tabs-container mt-2 px-3">
        <div class="tabs is-fullwidth is-piano">
            <ul>
                <ModesLink :to="nextTopLevel" #="{ navigate, key }">
                    <li :class="[{ 'is-active': currentTopLevel === 'AUX' }, linkColourMap[key]]" :key="key">
                        <a @click="navigate">{{ currentTopLevel }}</a>
                    </li>
                </ModesLink>
                <ModesLink v-for="link in links" :to="link" #="{ navigate, isExactlyActive, label, key, item }"
                    :key="link">
                    <li :class="[{ 'is-active': isExactlyActive }, linkColourMap[key] || 'is-light']">
                        <a @click="!isExactlyActive ? navigate() : store.navigate(item.parent)">{{ label }}</a>
                    </li>
                </ModesLink>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.tabs-container {
    width: 100%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    box-shadow: inset 0 0 0.5em rgba(0, 0, 0, 0.1);
    padding: 0.5em;

    &.is-rounded {
        --radius: 2em;
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
    }
}

.tabs {
    &.is-piano {
        --height: 9em;
        width: 100%;
        height: var(--height);

        ul {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(4em, 1fr));
            align-items: end;
            border-width: 0;

            li {
                position: relative;
                height: 100%;

                &:first-child {
                    &::before {
                        border-left: 0 solid #2b2d31ce;
                        border-bottom-left-radius: 1em;
                    }
                }

                &:last-child {
                    &::before {
                        border-right: 0 solid #2b2d31ce;
                        border-bottom-right-radius: 1em;
                    }
                }

                &:not(:last-child) {
                    &::before {
                        border-right: 0.15em solid #2b2d31ce;
                    }
                }

                &::before {
                    content: '';
                    display: block;
                    pointer-events: none;
                    transition: top 0.1s cubic-bezier(.19, 1, .22, 1), background-color 0.3s ease-in, border 0.2s ease-in-out, box-shadow 0.2s ease-out;
                    background: color-mix(in srgb, currentColor, black 10%);
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: calc(var(--height) - 6.5em);
                    top: calc(var(--height) - 6em);
                    border-top: .65em solid rgb(168, 168, 168);
                    box-shadow: inset 0 0.4em #2b2d31ce;
                }

                &:hover {
                    &::before {
                        top: calc(var(--height) - 5.9em);
                        box-shadow: inset 0 0.35em #2b2d31ce;
                        border-top-color: rgba(255, 255, 255, 0.459);
                        background: color-mix(in srgb, currentColor, black 11%);
                    }
                }

                &:active {
                    &::before {
                        box-shadow: inset 0 0.3em #2b2d31ce;
                        top: calc(var(--height) - 5.5em);
                    }
                }

                &.is-active {
                    &:not(:last-child) {
                        &::before {
                            border-right: 0.1em solid #2b2d31;
                        }
                    }

                    &::before {
                        top: calc(var(--height) - 4.5em);
                        box-shadow: inset 0 0.2em #2b2d31ce;
                        background: color-mix(in srgb, currentColor, black 15%);

                        a {
                            background: none;
                        }
                    }

                    &:hover {
                        &::before {
                            box-shadow: inset 0 0.25em #2b2d31ce;
                        }
                    }

                    &:active {
                        &::before {
                            top: calc(var(--height) - 4em);
                            box-shadow: inset 0 0.2em #2b2d31ce;
                        }
                    }
                }

                a {
                    border-color: transparent;
                    height: 100%;
                    align-items: end;

                    &:active,
                    &:hover {
                        background: none;
                    }
                }

                &.is-danger {
                    a {
                        color: var(--bulma-danger);
                    }

                    &::before {
                        border-top-color: var(--bulma-danger);
                        background-color: color-mix(in srgb, var(--bulma-danger), black 25%);
                    }
                }
            }
        }
    }
}
</style>