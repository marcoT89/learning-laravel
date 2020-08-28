<template>
    <component
        :is="as"
        class="px-4 py-2 flex items-center hover:opacity-100 opacity-75 hover:bg-black hover:bg-opacity-25 transition duration-150 cursor-pointer"
        :class="{ 'opacity-100 bg-black bg-opacity-25': active }"
        @click.native.stop="onClick"
        v-bind="$props"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        as: { default: 'a' },
        to: { default: null },
        exact: { default: false, type: Boolean },
    },

    data() {
        return { observer: null };
    },

    computed: {
        active() {
            return this.to && this.to.name === this.$route.name;
        },
    },

    methods: {
        onClick(event) {
            console.log('on click sidebar item');
            this.$emit('click', event);
        },
    },
};
</script>
