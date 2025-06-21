<template>
    <div class="notification">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <div class="buttons is-centered">
                        <button class="button is-dark" @click="$emit('3v')">3V</button>
                        <button class="button is-dark" @click="$emit('5v')">5V</button>
                        <button class="button is-dark" @click="$emit('GND')">G</button>
                        <button class="button is-primary" @click="$emit('amps')">𝐈</button>
                        <button class="button is-danger" @click="$emit('volts')">𝐕</button>
                        <button class="button is-info" @click="$emit('ohms')">Ω</button>
                        <button class="button is-success" @click="$emit('usbc')">⎓</button>
                        <button class="button is-light" @click="$emit('usba')">🔌</button>
                        <button class="button is-link" @click="$emit('mic')">🎤</button>
                        <button class="button is-warning" @click="$emit('phono')">🎵</button>
                        <button class="button is-dark" @click="$emit('ethernet')">🖧</button>
                    </div>
                </div>
            </div>
            <div class="level-right">
                <div class="level-item">
                    <div class="buttons is-centered">
                        <button class="button is-dark" @click="$emit('gpio')">SIG</button>
                    </div>
                </div>
                <div class="level-item">
                    <div class="buttons is-centered">
                        <button class="button is-dark" @click="$emit('gpio')">TESTER</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>