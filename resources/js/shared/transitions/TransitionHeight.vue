<template>
    <transition
        :name="name"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
    >
        <slot />
    </transition>
</template>

<script>
/* eslint-disable no-param-reassign */

export default {
    props: {
        name: { default: null },
    },
    methods: {
        enter(element) {
            const { height } = getComputedStyle(element);
            element.style.height = 0;

            requestAnimationFrame(() => {
                element.style.height = height;
            });
        },
        afterEnter(element) {
            element.style.height = 'auto';
        },
        leave(element) {
            const { height } = getComputedStyle(element);
            element.style.height = height;
            requestAnimationFrame(() => {
                element.style.height = 0;
            });
        },
    },
};
</script>
