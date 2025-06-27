<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ModesLink from './ModesLink.vue';
import { useModesMenuStore } from '@/stores/modes';
import { computed, nextTick, watch } from 'vue';
const store = useModesMenuStore();
const { nextTopLevel, currentTopLevel, selected } = storeToRefs(store);
const currentLinkKeys = computed(() => store.childrenKeys(currentTopLevel.value));

// watch for changes in selected, if oldvalue is differnt parent, set new parent child to same index
watch(selected, (newValue, oldValue) => {
    const newTopLevel = store.getTopLevel(newValue);
    const oldTopLevel = store.getTopLevel(oldValue || newValue);
    if (oldTopLevel !== newTopLevel) {
        const children = store.childrenKeys(oldTopLevel)
        const index = children.indexOf(oldValue);
        const child = store.childrenKeys(newTopLevel)[index];
        store.navigate(child);
    }
});

const linkColourMap = {
    rf: 'is-danger',
    aux: 'is-danger',
} as { [key: string]: string };

const { topLevel } = storeToRefs(store);
const topLevelKeys = computed(() => topLevel.value.map(i => i.key))
const getLabelsByParent = (parentKey = '') => store.childrenKeys(parentKey).map(key => getLabel(key))
const getLabel = (key = '') => {
    const item = store.getItem(key)
    return item.short || item.title || item.key
}
// get labels at the same index within each top level menu items based on current item key
const getLabels = (currentKey = '') => {
    const index = store.childrenKeys(currentTopLevel.value).findIndex(i => i === currentKey);
    return topLevelKeys.value.map(parentKey => getLabel(store.childrenKeys(parentKey)[index]))
}
</script>

<template>
    <div class="is-rounded tabs-container mt-2 px-3">
        <div class="tabs is-fullwidth is-piano is-mobile">
            <ul>
                <ModesLink :to="nextTopLevel" #="{ navigate, key }">
                    <li :class="[{ 'is-active': currentTopLevel === 'AUX' }, linkColourMap[key]]" :key="key">
                        <a @click="navigate">
                            <span v-for="label in topLevelKeys">
                                {{ label }}
                            </span>
                        </a>
                    </li>
                </ModesLink>
                <ModesLink v-for="linkKey in currentLinkKeys" :to="linkKey" #="{ navigate, isExactlyActive, key, item }"
                    :key="linkKey">
                    <li :class="[{ 'is-active': isExactlyActive }, linkColourMap[key] || 'is-light']">
                        <a @click="!isExactlyActive ? navigate() : store.navigate(item.parent)"
                            class="is-flex is-flex-direction-column is-justify-content-end">
                            <span v-for="label in getLabels(linkKey)">
                                {{ label }}
                            </span>
                        </a>
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
    display: flex;
    align-items: flex-end;
    padding-top: 5em;

    &.is-rounded {
        --radius: 2em;
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
    }

    .tabs {
        &.is-piano {
            display: flex;
            flex: 1;

            --button-move: 0em;
            --button-move--hover: .1em;
            --button-move--pressed: .5em;
            --button-move--active: 1.5em;
            --button-move--active--hover: 1.5em;
            --button-move--active--pressed: 2em;

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
                        bottom: 4em;
                        top: var(--button-move);
                        border-top: .65em solid rgb(168, 168, 168);
                        box-shadow: inset 0 0.4em #2b2d31ce;
                    }

                    &:hover {
                        &::before {
                            top: var(--button-move--hover);
                            box-shadow: inset 0 0.35em #2b2d31ce;
                            border-top-color: rgba(255, 255, 255, 0.459);
                            background: color-mix(in srgb, currentColor, black 11%);
                        }
                    }

                    &:active {
                        &::before {
                            box-shadow: inset 0 0.3em #2b2d31ce;
                            top: var(--button-move--pressed);
                        }
                    }

                    &.is-active {
                        &:not(:last-child) {
                            &::before {
                                border-right: 0.1em solid #2b2d31;
                            }
                        }

                        &::before {
                            top: var(--button-move--active);
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
                                top: var(--button-move--active--pressed);
                                box-shadow: inset 0 0.2em #2b2d31ce;
                            }
                        }
                    }

                    a {
                        border-color: transparent;
                        height: 100%;
                        justify-content: flex-end;
                        display: flex;
                        flex-direction: column;
                        padding-top: 4.375em;

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
}
</style>