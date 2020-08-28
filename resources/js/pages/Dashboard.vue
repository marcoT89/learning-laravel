<template>
    <div class="p-6">
        <h1 class="text-3xl">Dashboard</h1>

        <router-link to="/users">Users</router-link>

        <p v-for="n of 3" :key="n">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            vero voluptates debitis repudiandae sapiente at totam odio amet
            dolores non quasi, quisquam quia minima minus excepturi pariatur.
            Esse, minus ab.
        </p>
    </div>
</template>
