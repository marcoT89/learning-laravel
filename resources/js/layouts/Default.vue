<template>
    <div class="bg-gray-100 h-screen w-full flex">
        <sidebar
            @toggle="toggleSidebar"
            :opened="sidebarOpened"
            class="z-10"
        ></sidebar>

        <div class="w-full flex flex-col">
            <div class="bg-white shadow w-full px-6 py-2 flex items-center">
                <button
                    @click="toggleSidebar"
                    class="rounded-lg hover:bg-gray-100 transition duration-150 ease-in-out focus:outline-none -mx-4 p-1"
                >
                    <icon name="menu" class="w-6 h-6 text-gray-500"></icon>
                </button>
            </div>

            <div class="overflow-y-auto">
                <transition name="page" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
    @apply transition-all absolute duration-500 ease-in-out;
}
.page-enter,
.page-leave-to {
    @apply opacity-0 transform -translate-x-1;
}
</style>

<script>
import { Sidebar } from '@/shared/sidebar';

export default {
    components: { Sidebar },

    data() {
        return {
            sidebarOpened: true,
        };
    },

    methods: {
        toggleSidebar() {
            this.sidebarOpened = !this.sidebarOpened;
        },
    },
};
</script>
