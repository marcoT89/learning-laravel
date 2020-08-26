<template>
    <component
        :is="as"
        class="px-4 py-2 flex items-center hover:opacity-100 opacity-75 hover:bg-black hover:bg-opacity-25 transition duration-150 cursor-pointer"
        :class="{ 'opacity-100 bg-black bg-opacity-25': active }"
        @click="$emit('click', $event)"
        v-bind="$props"
    >
        <slot></slot>
    </component>
</template>

<script>
export default {
    props: {
        as: { default: 'a' },
        active: { default: false, type: Boolean },
    },
};
</script>
