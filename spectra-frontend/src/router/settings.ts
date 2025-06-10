import type { ComponentMap } from '../../env';

export const settingsMenu = {
    '': {
        title: 'Clock',
        icon: '⏰',
        component: () => import('../views/settings/DefaultView.vue')
    },
    'settings': {
        title: 'Settings',
        icon: '⚙️',
        component: () => import('../views/settings/BlankView.vue'),
    },
    'connectivity': {
        title: 'Connectivity',
        icon: '📡',
        component: () => import('../views/settings/BlankView.vue'),
    },
    'power': {
        title: 'Power',
        icon: '🔋',
        component: () => import('../views/settings/BlankView.vue'),
    },
    'tools-functions': {
        title: 'Tools & Functions',
        icon: '🔧',
        component: () => import('../views/settings/BlankView.vue'),
    },
    'data-storage': {
        title: 'Data & Storage',
        icon: '📁',
        component: () => import('../views/settings/BlankView.vue'),
    },
    'messages': {
        title: 'Messages',
        icon: '💬',
        component: () => import('../views/settings/BlankView.vue'),
    },
    'entertainment': {
        title: 'Entertainment',
        icon: '🎮',
        component: () => import('../views/settings/BlankView.vue'),
    },

    // Settings Children
    'time-settings': { title: 'Time', icon: '⏰', parent: 'settings', component: () => import('../views/settings/BlankView.vue') },
    'language-settings': { title: 'Language', icon: '🌐', parent: 'settings', component: () => import('../views/settings/BlankView.vue') },
    'screen-settings': { title: 'Screens', icon: '📺', parent: 'settings', component: () => import('../views/settings/BlankView.vue') },
    'pro-mode': { title: 'Pro Mode', icon: '⚡', parent: 'settings', component: () => import('../views/settings/BlankView.vue') },
    'gpio-settings': { title: 'GPIO', icon: '🔌', parent: 'settings', component: () => import('../views/settings/BlankView.vue') },
    'app-settings': { title: 'App', icon: '📱', parent: 'settings', component: () => import('../views/settings/BlankView.vue') },
    'device-overview': { title: 'Device', icon: 'ℹ️', parent: 'settings', component: () => import('../views/settings/BlankView.vue') },
    'location-settings': { title: 'Location', icon: '📍', parent: 'settings', component: () => import('../views/settings/BlankView.vue') },

    // Connectivity Children
    'bluetooth': { title: 'Bluetooth', icon: '🅱️', parent: 'connectivity', component: () => import('../views/settings/BlankView.vue') },
    'wifi-settings': { title: 'Wi-Fi', icon: '📶', parent: 'connectivity', component: () => import('../views/settings/BlankView.vue') },
    'mqtt-settings': { title: 'MQTT', icon: '📨', parent: 'connectivity', component: () => import('../views/settings/BlankView.vue') },
    'ethernet-settings': { title: 'Ethernet', icon: '🔗', parent: 'connectivity', component: () => import('../views/settings/BlankView.vue') },
    'meshtastic-settings': { title: 'Meshtastic', icon: '〰️', parent: 'connectivity', component: () => import('../views/settings/BlankView.vue') },
    'lora-settings': { title: 'LoRa', icon: '⬆️', parent: 'connectivity', component: () => import('../views/settings/BlankView.vue') },
    'ism-radio-settings': { title: 'ISM Radio', icon: '📻', parent: 'connectivity', component: () => import('../views/settings/BlankView.vue') },
    'remote-control': { title: 'Remote', icon: '🕹️', parent: 'connectivity', component: () => import('../views/settings/BlankView.vue') },

    // Power Children
    'battery-info': { title: 'Battery', icon: '🔋', parent: 'power', component: () => import('../views/settings/BlankView.vue') },
    'solar-info': { title: 'Solar', icon: '☀️', parent: 'power', component: () => import('../views/settings/BlankView.vue') },

    // Tools & Functions Children
    'meter-mode': { title: 'Meter', icon: '📏', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },
    'ir-mode': { title: 'Infra Red', icon: '🔴', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },
    'uv-mode': { title: 'Ultra Violet', icon: '🟣', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },
    'microwave-mode': { title: 'Micro Wave', icon: '〰️', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },
    'radio-wave-mode': { title: 'Radio Wave', icon: '🌊', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },
    'generator-mode': { title: 'Generator', icon: '🎛️', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },
    'tester-mode': { title: 'Tester', icon: '✅', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },
    'decoders': { title: 'Decoders', icon: ' decipher', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },
    'passthrough-mode': { title: 'Passthrough', icon: '➡️', parent: 'tools-functions', component: () => import('../views/settings/BlankView.vue') },

    // Data & Storage Children
    'sdcard-info': { title: 'SD Card', icon: '💾', parent: 'data-storage', component: () => import('../views/settings/BlankView.vue') },
    'saved-data': { title: 'Saved', icon: '⭐', parent: 'data-storage', component: () => import('../views/settings/BlankView.vue') },
    'music-player': { title: 'Music', icon: '🎶', parent: 'data-storage', component: () => import('../views/settings/BlankView.vue') },

    // Entertainment Children
    'game-menu': { title: 'Games', icon: '👾', parent: 'entertainment', component: () => import('../views/settings/BlankView.vue') },

    // Sub-Components (Children of 'messages' category, managed by MessagesContainerView)
    'view-messages': { title: 'View Messages', icon: '👁️', parent: 'messages', component: () => import('../views/settings/BlankView.vue') },
    'compose-message': { title: 'New Message', icon: '✍️', parent: 'messages', component: () => import('../views/settings/BlankView.vue') },

} as ComponentMap;
