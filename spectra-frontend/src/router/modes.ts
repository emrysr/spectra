import type { ComponentMap } from '../../env';

export const modesMenu = {
    'RF': {
        title: 'Wireless',
        icon: '🅰️',
        component: () => import('../views/settings/DefaultView.vue')
    },
    'ism': { title: 'ISM', icon: '🔔', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },
    'gps': { title: 'GPS', icon: '🌎', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },
    '2.4': { title: '2.4GHz', icon: '🛜', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },
    'vhf': { title: 'VHF', icon: '📻', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },
    'cb': { title: 'CB', icon: '🌊', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },

    'WIRED': {
        title: 'Wired',
        icon: '🅱️',
        component: () => import('../views/settings/DefaultView.vue')
    },
    'meter': { title: 'Multimeter', icon: '🕰️', parent: 'WIRED', component: () => import('../views/settings/BlankView.vue') },
    'ir': { title: 'Infrared', icon: '🟥', parent: 'WIRED', component: () => import('../views/settings/BlankView.vue') },
    'logic': { title: 'Logic Analiser', icon: '📈', parent: 'WIRED', component: () => import('../views/settings/BlankView.vue') },
    'ethernet': { title: 'Ethernet', icon: '🔗', parent: 'WIRED', component: () => import('../views/settings/BlankView.vue') },
    'signal': { title: 'Signal Generator', icon: '🔊', parent: 'WIRED', component: () => import('../views/settings/BlankView.vue') },

} as ComponentMap;
