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
export default {
    props: {
        name: { required: true, type: String },
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
