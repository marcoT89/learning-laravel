<template>
    <div>
        <!-- Mobile Overlay -->
        <transition name="fade">
            <div
                v-show="!opened"
                @click="toggle"
                class="sm:hidden bg-gray-700 bg-opacity-50 fixed inset-0 z-20"
            ></div>
        </transition>
        <!-- End Mobile Overlay -->

        <!-- Mobile -->
        <transition name="mobile">
            <sidebar-content
                v-show="!opened"
                @click="toggle"
                class="sm:hidden z-30 fixed inset-0"
            ></sidebar-content>
        </transition>
        <!-- End Mobile Sidebar -->

        <!-- Desktop -->
        <transition name="desktop">
            <div v-show="opened" class="hidden w-64 sm:block overflow-hidden">
                <sidebar-content></sidebar-content>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.mobile-enter-active,
.mobile-leave-active {
    @apply transition-all duration-500 ease-in-out;
}
.mobile-enter,
.mobile-leave-to {
    @apply transform -translate-x-full;
}

.desktop-enter-active,
.desktop-leave-active {
    @apply transition-all duration-500 ease-in-out;
}
.desktop-enter,
.desktop-leave-to {
    @apply w-0;
}

.fade-enter-active,
.fade-leave-active {
    @apply transition-opacity duration-500 ease-in-out;
}
.fade-enter,
.fade-leave-to {
    @apply opacity-0;
}
</style>

<script>
import SidebarContent from './SidebarContent.vue';

export default {
    components: { SidebarContent },

    props: {
        opened: { required: true, type: Boolean },
    },

    methods: {
        toggle() {
            this.$emit('toggle');
        },
    },
};
</script>
