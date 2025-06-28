import { computed, defineAsyncComponent, shallowRef } from 'vue'
import { defineStore } from 'pinia'

export const createMenuStore = (menuConfig: any, storeId: string) => {
    // Ensure a storeId is provided for Pinia
    if (!storeId || typeof storeId !== 'string') {
        console.error('[Pinia Store Factory] storeId is required and must be a string.')
        // Fallback to a generic ID, but this could lead to issues if not unique
        storeId = `generic-menu-store-${Math.random().toString(36).substring(2, 9)}`;
    }

    return defineStore(storeId, () => {
        const selected = shallowRef(''); // selected item key
        const navigate = (to: string) => {
            if (menuConfig[to]) {
                // console.debug(`[Pinia Store] navigating to: '${to}'`)
                selected.value = to;
            } else {
                console.warn(`[Pinia Store] unknown child: '${to}'.`);
            }
        }
        // set a route to active
        const selectChildByIndex = (parentKey: string, index: number) => {
            const children = childrenKeys(parentKey);
            if (childrenKeys.length > index && index >= 0) {
                selected.value = children[index];
            } else {
                console.warn(`[Pinia Store] No child at index ${index} for parent '${parentKey}'.`);
            }
        }
        const childrenKeys = (parentKey: string) => Object.keys(menuConfig).filter(i => menuConfig[i].parent === parentKey)
        const currentView = computed(() => menuConfig[selected.value] ?? null)
        const menu = computed(() => Object.keys(menuConfig).map(key => ({
            key,
            title: menuConfig[key].title,
            parent: menuConfig[key].parent,
        })))
        const getItem = (key: string) => ({ key, ...menuConfig[key] });
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
        const getTopLevel = (key: string) => {
            const parents = getParents(key);
            return parents.length ? parents[parents.length - 1] : key;
        }
        const isActive = (key: string) => isExactlyActive(key) || getParents(key).length;
        const isExactlyActive = (key: string) => selected.value === key

        const currentComponent = computed(async () => defineAsyncComponent(currentView.value.component))

        // all top level menu items
        const topLevel = computed(() => {
            const topLevelKeys = Object.keys(menuConfig).filter(key => !menuConfig[key].parent);
            return topLevelKeys.map(key => ({
                key,
                title: menuConfig[key].title,
                icon: menuConfig[key].icon,
            }));
        });

        // the top level menu item of the currently selected item, defaults to the first one if none selected
        const currentTopLevel = computed(() => {
            if (selected.value && menuConfig[selected.value]) {
                const parent = menuConfig[selected.value].parent;
                if (parent) {
                    return getParents(selected.value).pop() || topLevel.value[0]?.key || '';
                }
                return selected.value;
            }
            return topLevel.value[0]?.key || '';
        });

        // return the next top level menu item key (cycles to first if at the end)
        const nextTopLevel = computed(() => {
            const topLevelKeys = topLevel.value.map(item => item.key);
            if (topLevelKeys.length === 0) return '';
            if (topLevelKeys.length === 1) return topLevelKeys[0];

            const currentIndex = topLevelKeys.indexOf(currentTopLevel.value);
            if (currentIndex === -1) return topLevelKeys[0];
            // Cycle to first if at the end, else go to next
            return topLevelKeys[(currentIndex + 1) % topLevelKeys.length];
        });
        return {
            getItem,
            selected, // selected item key
            menu,
            navigate,
            currentView,
            currentComponent,
            childrenKeys,
            selectChildByIndex,
            getParents,
            getTopLevel,
            topLevel,
            isActive,
            isExactlyActive,
            currentTopLevel, // key for current top level
            nextTopLevel
        }
    })
}
