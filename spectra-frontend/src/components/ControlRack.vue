<script setup lang="ts">
import { storeToRefs } from 'pinia';
import SettingsLink from './SettingsLink.vue';
import { useSettingsMenuStore } from '@/stores/settings';
import SettingsView from './SettingsView.vue';
const { currentView } = storeToRefs(useSettingsMenuStore());
</script>
<template>

    <section class="p-2" id="center-panel">
        <div id="center-panel__left">
            <div class="dpad">
                <button class="button is-dark dpad--up is-raised">⮝</button>
                <button class="button is-dark dpad--left is-raised">⮜</button>
                <button class="button is-dark dpad--right is-raised">⮞</button>
                <button class="button is-dark dpad--down is-raised">⮟</button>
                <div class="button is-dark is-raised dpad--center" style="pointer-events: none;"></div>
            </div>
        </div>
        <div id="center-panel__center">
            <div id="start-select" class="block">
                <div class="buttons is-centered">
                    <SettingsLink to="" label="Select" #="{ navigate, label }">
                        <a @click="navigate" class="button is-raised">{{ label }}</a>
                    </SettingsLink>
                    <SettingsLink to="settings" label="Start" #="{ navigate, label }">
                        <a @click="navigate" class="button is-raised">{{ label }}</a>
                    </SettingsLink>
                </div>
            </div>

            <div id="center-panel__screen" class="block">
                <div class="notification is-dark" style="border-radius:4px;">
                    <SettingsView />
                </div>
            </div>
        </div>
        <div id="center-panel__right">
            <div class="action-buttons buttons">
                <button class="button is-rounded is-danger is-circle is-family-mono mt-6 is-raised">
                    B
                </button>
                <button class="button is-rounded is-circle is-danger is-family-mono mb-6 is-raised">
                    A
                </button>
            </div>
        </div>
    </section>



</template>

<style>
#center-panel {
    display: grid;
    grid-template-areas: "left center right";
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    background: var(--bulma-background, #ccc);
    width: 100%;
    margin: auto
}

#center-panel__left {
    grid-area: left;
    display: flex;
    justify-content: center;
    align-items: center;

    .dpad {
        display: grid;
        grid-template-areas:
            ". up ."
            "left center right"
            ". down .";
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        gap: 10px;

        .dpad--up {
            grid-area: up;
        }

        .dpad--down {
            grid-area: down;
        }

        .dpad--left {
            grid-area: left;
        }

        .dpad--right {
            grid-area: right;
        }

        .dpad--center {
            grid-area: center;
        }
    }

}

#center-panel__center {
    display: grid;
    grid-template-areas:
        "start-select"
        "screen";
    gap: 1rem;

    #start-select {
        grid-area: start-select;
        display: flex;
        justify-content: center;
        gap: 1rem;
        height: 2rem;
    }

    #start {
        grid-area: start;
    }

    #select {
        grid-area: select;
    }

    #center-panel__screen {
        flex-grow: 1;
        grid-area: screen;
        display: flex;
        justify-content: center;
    }

}

#center-panel__right {
    grid-area: right;
    display: flex;
    justify-content: center;
    align-items: center;

    .action-buttons {
        color: var(--text-dark)
    }
}

#status-panel {
    display: grid;
    grid-template-areas:
        "indicator1 time temp battery"
        "indicator2 time temp battery";
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    align-items: end;
    flex-grow: 1;
    justify-content: center;
    height: 6rem;
    aspect-ratio: 5;
}

.indicator:first-of-type {
    grid-area: indicator1;
}

.indicator:last-of-type {
    grid-area: indicator2;
}

.time {
    grid-area: time;
    font-size: 24px;
}

.temp {
    grid-area: temp;
    font-size: 18px;
}

.battery {
    grid-area: battery;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.battery-bar {
    width: 10px;
    height: 5px;
    background-color: black;
    margin-bottom: 2px;
}


#logBox {
    max-height: 11em;
}

.button.is-rounded.is-circle {
    width: 40px;
    height: auto;
    aspect-ratio: 1;
}

.button.is-square {
    width: 40px;
    aspect-ratio: 1;
    /* Ensures it's always a square */
    border-radius: 0;
    /* Ensures sharp corners */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>