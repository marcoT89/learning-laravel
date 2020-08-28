<template>
    <router-link v-bind="$props">
        <icon
            v-if="route.icon"
            :name="route.icon"
            class="w-5 h-5 transition duration-150 ease-in-out"
            :class="active ? 'text-blue-500' : 'opacity-50'"
        ></icon>
        <div>{{ route.label }}</div>
    </router-link>
</template>

<script>
export default {
    props: ['to', 'exact', 'name', 'route'],

    computed: {
        active() {
            return this.$route.name === this.route.name;
        },
    },
};
</script>

<style lang="scss">
.active,
.exact-active {
    @apply bg-gray-900;
}
</style>
