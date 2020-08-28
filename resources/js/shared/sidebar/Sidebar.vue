<template>
    <div>
        <transition name="fade" mode="out-in">
            <div
                v-if="opened"
                @click="opened = false"
                class="sm:hidden fixed inset-0 bg-gray-700 bg-opacity-50"
            ></div>
        </transition>

        <!-- mobile -->
        <transition name="sidebar">
            <div
                class="sm:hidden sm:relative w-64 overflow-hidden h-screen fixed inset-0 flex-shrink-0"
                v-if="opened"
            >
                <div
                    class="w-64 h-screen overflow-y-auto bg-gray-800 text-white"
                >
                    <slot name="header"></slot>

                    <nav class="flex flex-col">
                        <slot>
                            <template v-if="menus.length">
                                <template v-for="(menu, index) of menus">
                                    <sidebar-item-parent
                                        v-if="
                                            menu.children &&
                                            menu.children.length
                                        "
                                        :key="index"
                                        :menu="menu"
                                        @child-click="toggleSidebar"
                                    />

                                    <sidebar-item
                                        v-if="!menu.children"
                                        :key="index"
                                        :to="menu.route"
                                        as="router-link"
                                        class="space-x-2 rounded-lg mx-2 mt-2"
                                        :exact="menu.exact"
                                        :active="menu.active"
                                        @click="toggleSidebar"
                                    >
                                        <icon
                                            :name="menu.icon"
                                            class="w-5 h-5"
                                            :class="
                                                menu.active
                                                    ? 'text-blue-500'
                                                    : 'text-gray-500'
                                            "
                                        />
                                        <div>{{ menu.name }}</div>
                                    </sidebar-item>
                                </template>
                            </template>
                        </slot>
                    </nav>
                </div>
            </div>
        </transition>

        <!-- desktop -->
        <transition name="sidebar">
            <div
                v-if="!opened"
                class="hidden sm:block sm:relative w-64 overflow-hidden h-screen fixed inset-0 flex-shrink-0"
            >
                <div
                    class="w-64 h-screen overflow-y-auto bg-gray-800 text-white"
                >
                    <slot name="header"></slot>

                    <nav class="flex flex-col">
                        <slot>
                            <template v-if="menus.length">
                                <template v-for="(menu, index) of menus">
                                    <sidebar-item-parent
                                        v-if="
                                            menu.children &&
                                            menu.children.length
                                        "
                                        :key="index"
                                        :menu="menu"
                                    />

                                    <sidebar-item
                                        v-if="!menu.children"
                                        :key="index"
                                        :href="menu.route"
                                        :to="menu.route"
                                        as="router-link"
                                        :exact="menu.exact"
                                        class="space-x-2 rounded-lg mx-2 mt-2"
                                        :active="menu.active"
                                    >
                                        <icon
                                            :name="menu.icon"
                                            class="w-5 h-5"
                                            :class="
                                                menu.active
                                                    ? 'text-blue-500'
                                                    : 'text-gray-500'
                                            "
                                        />
                                        <div>{{ menu.name }}</div>
                                    </sidebar-item>
                                </template>
                            </template>
                        </slot>
                    </nav>
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    @apply transition-opacity duration-300;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.sidebar-enter-active,
.sidebar-leave-active {
    @apply transition-all duration-500 ease-in-out;
}
.sidebar-enter,
.sidebar-leave-to {
    @apply transform -translate-x-full;
    @screen sm {
        @apply w-0 transform translate-x-0;
    }
}
</style>

<script>
import EventBus from './EventBus';
import SidebarItem from './SidebarItem.vue';
import SidebarItemParent from './SidebarItemParent.vue';

export default {
    components: { SidebarItem, SidebarItemParent },
    props: {
        menus: { default: () => [], type: Array },
    },

    data() {
        return {
            opened: null,
        };
    },

    created() {
        EventBus.$on('@sidebar/toggle', this.toggleSidebar);
    },

    methods: {
        toggleSidebar() {
            this.opened = !this.opened;
        },
    },
};
</script>
