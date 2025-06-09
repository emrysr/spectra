<template>
    <div class="tabs">
        <ul>
            <RouterLink v-slot="{ href, navigate, isActive, isExactActive }" to="/device" custom>
                <li :href="href" :class="{ 'is-active': isActive }">
                    <a @click="navigate">Clock</a>
                </li>
            </RouterLink>
            <RouterLink v-slot="{ href, navigate, isActive, isExactActive }" to="/device/settings" custom>
                <li :href="href" :class="{ 'is-active': isActive }">
                    <a @click="navigate">Settings</a>
                </li>
            </RouterLink>
        </ul>
    </div>
</template>