import type { ComponentMap } from '../../env';

export const modesMenu = {
    'RF': {
        title: 'Wireless',
        icon: '🅰️',
        component: () => import('../views/settings/DefaultView.vue')
    },
    'ism': { title: 'ISM', icon: '🔔', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },
    'gps': { title: 'GPS', icon: '🌎', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },
    '2.4': { title: '2.4GHz', short: '2.4', icon: '🛜', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },
    'vhf': { title: 'VHF', icon: '📻', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },
    'cb': { title: 'CB', icon: '🌊', parent: 'RF', component: () => import('../views/settings/BlankView.vue') },

    'AUX': {
        title: 'Line In',
        short: 'aux',
        icon: '🅱️',
        component: () => import('../views/settings/DefaultView.vue')
    },
    'meter': { title: 'Multimeter', short: 'VA', icon: '🕰️', parent: 'AUX', component: () => import('../views/settings/BlankView.vue') },
    'ir': { title: 'Infrared', short: 'IR', icon: '🟥', parent: 'AUX', component: () => import('../views/settings/BlankView.vue') },
    'logic': { title: 'Logic Analiser', short: 'LOG', icon: '📈', parent: 'AUX', component: () => import('../views/settings/BlankView.vue') },
    'ethernet': { title: 'Ethernet', short: 'CAT', icon: '🔗', parent: 'AUX', component: () => import('../views/settings/BlankView.vue') },
    'signal': { title: 'Signal Generator', short: 'SIG', icon: '🔊', parent: 'AUX', component: () => import('../views/settings/BlankView.vue') },

} as ComponentMap;
