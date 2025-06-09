import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
    const selected = ref(null)
    const menu = [
        {
            "name": "Settings",
            "icon": "⚙️",
            "options": [
                { "name": "Time", "icon": "⏰", "action": "show_time_settings" },
                { "name": "Language", "icon": "🌐", "action": "show_language_settings" },
                { "name": "Screens", "icon": "📺", "action": "show_screen_settings" },
                { "name": "Pro Mode", "icon": "⚡", "action": "toggle_pro_mode" },
                { "name": "GPIO", "icon": "🔌", "action": "show_gpio_settings" },
                { "name": "App", "icon": "📱", "action": "show_app_settings" },
                { "name": "Device", "icon": "ℹ️", "action": "show_device_info" },
                { "name": "Location", "icon": "📍", "action": "show_location_settings" }
            ]
        },
        {
            "name": "Connectivity",
            "icon": "📡",
            "options": [
                { "name": "Bluetooth", "icon": "🅱️", "action": "toggle_bluetooth" },
                { "name": "Wi-Fi", "icon": "📶", "action": "show_wifi_settings" },
                { "name": "MQTT", "icon": "📨", "action": "show_mqtt_settings" },
                { "name": "Ethernet", "icon": "🔗", "action": "show_ethernet_settings" },
                { "name": "Meshtastic", "icon": "〰️", "action": "show_meshtastic_settings" },
                { "name": "LoRa", "icon": "⬆️", "action": "show_lora_settings" },
                { "name": "ISM Radio", "icon": "📻", "action": "show_ism_radio_settings" },
                { "name": "Remote", "icon": "🕹️", "action": "show_remote_control" }
            ]
        },
        {
            "name": "Power",
            "icon": "🔋",
            "options": [
                { "name": "Battery", "icon": "🔋", "action": "show_battery_info" },
                { "name": "Solar", "icon": "☀️", "action": "show_solar_info" }
            ]
        },
        {
            "name": "Tools & Functions",
            "icon": "🔧",
            "options": [
                { "name": "Meter", "icon": "📏", "action": "start_meter_mode" },
                { "name": "Infra Red", "icon": "🔴", "action": "start_ir_mode" },
                { "name": "Ultra Violet", "icon": "🟣", "action": "start_uv_mode" },
                { "name": "Micro Wave", "icon": "〰️", "action": "start_microwave_mode" },
                { "name": "Radio Wave", "icon": "🌊", "action": "start_radio_wave_mode" },
                { "name": "Generator", "icon": "🎛️", "action": "start_generator_mode" },
                { "name": "Tester", "icon": "✅", "action": "start_tester_mode" },
                { "name": "Decoders", "icon": " decipher", "action": "show_decoders" },
                { "name": "Passthrough", "icon": "➡️", "action": "start_passthrough_mode" }
            ]
        },
        {
            "name": "Data & Storage",
            "icon": "📁",
            "options": [
                { "name": "SD Card", "icon": "💾", "action": "show_sdcard_info" },
                { "name": "Saved", "icon": "⭐", "action": "show_saved_data" },
                { "name": "Music", "icon": "🎶", "action": "start_music_player" }
            ]
        },
        {
            "name": "Messages",
            "icon": "💬",
            "options": [
                { "name": "View Messages", "icon": "👁️", "action": "view_messages" },
                { "name": "New Message", "icon": "✍️", "action": "compose_message" }
            ]
        },
        {
            "name": "Entertainment",
            "icon": "🎮",
            "options": [
                { "name": "Games", "icon": "👾", "action": "show_game_menu" }
            ]
        }
    ]


    return { selected, menu }
})
