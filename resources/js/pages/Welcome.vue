<template>
    <layouts-dashboard>
        <div class="p-6">
            <button @click="toggleSidebar" class="btn primary">
                Toggler
            </button>

            <h1 class="text-3xl">Conteúdo</h1>

            <p v-for="n of 30" :key="n">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda vero voluptates debitis repudiandae sapiente at totam
                odio amet dolores non quasi, quisquam quia minima minus
                excepturi pariatur. Esse, minus ab.
            </p>
        </div>
    </layouts-dashboard>
</template>

<script>
import { toggler } from '@/shared/sidebar';

export default {
    methods: {
        toggleSidebar() {
            toggler.toggle();
        },
    },
};
</script>
