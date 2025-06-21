<template>
    <div class="notification is-light p-6 has-shadow m-5">
        <div id="breadboard" class="m-auto">
            <div class="has-breadboard-background"></div>
            <div class="has-breadboard-background"></div>
            <div class="has-breadboard-background"></div>
            <div class="has-breadboard-background"></div>
        </div>
    </div>
</template>

<style lang="scss">
#breadboard {
    display: grid;
    grid-template-rows: 1fr 4fr 4fr 1fr;
    gap: 0.5em;
}

.has-breadboard-background {
    background-image: radial-gradient(circle at center, hsl(30, 10%, 70%) 2px, transparent 2px);
    background-size: .5em .5em;
    background-position: 0 0;
    background-origin: content-box;
}

#breadboard {
    padding: 1em;
    aspect-ratio: 2.9;
    max-width: 40rem;
    outline: 1px solid grey;
    border-radius: 3px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>