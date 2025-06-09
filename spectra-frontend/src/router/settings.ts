import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/device',
        name: 'default',
        component: () => import('../views/settings/DefaultView.vue'),
    },
    {
        path: '/device/settings',
        name: 'settings',
        component: () => import('../views/settings/SettingsView.vue'),
    },
]

export default routes
