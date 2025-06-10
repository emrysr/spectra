import { ref, computed, defineAsyncComponent } from 'vue'
import { defineStore } from 'pinia'
import { settingsMenu } from '../router/settings'
export const useSettingsMenuStore = defineStore('settings-menu', () => {
    const selected = ref('')
    const navigate = (to: string) => {
        if (settingsMenu[to]) {
            selected.value = to;
        } else {
            console.warn(`[Pinia Store] unknown setting: '${to}'.`);
        }
    }
    const children = (parentKey: string) => Object.keys(settingsMenu).filter(i => settingsMenu[i].parent === parentKey)
    const currentView = computed(() => settingsMenu[selected.value] ?? null)
    const menu = computed(() => Object.keys(settingsMenu).map(key => ({
        key,
        title: settingsMenu.title,
    })))
    const getItem = (key: string) => settingsMenu[key];
    const getParents = (key: string) => {
        const parents: string[] = [];
        const visited = new Set<string>();
        let currentKey: string | undefined = key;

        while (currentKey && settingsMenu[currentKey]) {
            if (visited.has(currentKey)) {
                console.warn(`Circular reference detected in menu hierarchy at key: ${currentKey}`);
                break;
            }

            visited.add(currentKey);
            const parent: string | undefined = settingsMenu[currentKey].parent;

            if (!parent) break;

            parents.push(parent);
            currentKey = parent;
        }
        return parents;
    }
    const isActive = (key: string) => isExactlyActive(key) || getParents(key).length;
    const isExactlyActive = (key: string) => selected.value === key

    const currentComponent = computed(async () => defineAsyncComponent(currentView.value.component))

    return { getItem, selected, menu, navigate, currentView, currentComponent, children, isActive, isExactlyActive }
})
