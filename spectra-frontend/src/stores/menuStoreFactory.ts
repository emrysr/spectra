import { ref, computed, defineAsyncComponent } from 'vue'
import { defineStore } from 'pinia'

export const createMenuStore = (menuConfig: any, storeId: string) => {
    // Ensure a storeId is provided for Pinia
    if (!storeId || typeof storeId !== 'string') {
        console.error('[Pinia Store Factory] storeId is required and must be a string.')
        // Fallback to a generic ID, but this could lead to issues if not unique
        storeId = `generic-menu-store-${Math.random().toString(36).substring(2, 9)}`;
    }

    return defineStore(storeId, () => {
        const selected = ref('')
        const navigate = (to: string) => {
            if (menuConfig[to]) {
                selected.value = to;
            } else {
                console.warn(`[Pinia Store] unknown setting: '${to}'.`);
            }
        }
        const children = (parentKey: string) => Object.keys(menuConfig).filter(i => menuConfig[i].parent === parentKey)
        const currentView = computed(() => menuConfig[selected.value] ?? null)
        const menu = computed(() => Object.keys(menuConfig).map(key => ({
            key,
            title: menuConfig[key].title,
            parent: menuConfig[key].parent,
        })))
        const getItem = (key: string) => menuConfig[key];
        const getParents = (key: string) => {
            const parents: string[] = [];
            const visited = new Set<string>();
            let currentKey: string | undefined = key;

            while (currentKey && menuConfig[currentKey]) {
                if (visited.has(currentKey)) {
                    console.warn(`Circular reference detected in menu hierarchy at key: ${currentKey}`);
                    break;
                }

                visited.add(currentKey);
                const parent: string | undefined = menuConfig[currentKey].parent;

                if (!parent) break;

                parents.push(parent);
                currentKey = parent;
            }
            return parents;
        }
        const isActive = (key: string) => isExactlyActive(key) || getParents(key).length;
        const isExactlyActive = (key: string) => selected.value === key

        const currentComponent = computed(async () => defineAsyncComponent(currentView.value.component))

        return {
            getItem,
            selected,
            menu,
            navigate,
            currentView,
            currentComponent,
            children,
            isActive,
            isExactlyActive
        }
    })
}
