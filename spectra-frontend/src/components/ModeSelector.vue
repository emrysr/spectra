<template>
    <h1>Modes:</h1>
    <div class="tabs">
        <ul>
            <RouterLink v-slot="{ href, navigate, isActive, isExactActive }" to="/device/" custom>
                <li :href="href" class="is-danger">
                    <a @click="navigate">&nbsp;A</a>
                </li>
            </RouterLink>
            <RouterLink v-slot="{ href, navigate, isActive, isExactActive }" to="/device/" custom>
                <li :href="href" class="is-danger">
                    <a @click="navigate">&nbsp;B</a>
                </li>
            </RouterLink>
        </ul>
    </div>
</template>