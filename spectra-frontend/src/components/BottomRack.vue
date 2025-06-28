<script setup lang="ts">
import TheBreadboard from './TheBreadboard.vue';
</script>
<template>
    <div class="columns is-mobile has-background-grey-darker">
        <div class="column">
            <TheBreadboard />
        </div>
        <div class="column is-narrow">
            <div class="control">
                <div class="tags has-addons">
                    <a class="tag is-link">Spectra</a>
                    <a class="tag is-black">96l</a>
                </div>
            </div>
        </div>
    </div>
</template>