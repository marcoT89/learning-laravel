<template>
    <div
        @click.stop="opened = !opened"
        class="mx-2 mt-2 px-2 py-2 rounded-lg cursor-pointer opacity-75 hover:opacity-100 hover:bg-black hover:bg-opacity-25 transition duration-200 ease-in-out"
        :class="{ 'bg-black bg-opacity-25 opacity-100': opened }"
    >
        <div
            class="px-2 flex items-center transition-all duration-500 ease-in-out"
            :class="opened && 'mb-2'"
        >
            <icon
                :name="menu.icon"
                class="w-5 h-5 mr-2"
                :class="isActive ? 'text-blue-500' : 'text-gray-500'"
            />

            <div class="mr-2">
                {{ menu.name }}
            </div>

            <icon
                name="chevron-down"
                class="w-4 h-4 ml-auto transition-transform duration-500 ease-in-out"
                :class="opened ? 'transform rotate-180' : ''"
            />
        </div>

        <transition-height name="height">
            <div v-if="opened" class="space-y-1">
                <sidebar-item
                    v-for="child of menu.children"
                    :key="child.name"
                    :to="child.route"
                    :active="child.active"
                    class="text-sm pl-9 rounded-lg"
                    as="router-link"
                    @click="onItemClick"
                >
                    <div>{{ child.name }}</div>
                </sidebar-item>
            </div>
        </transition-height>
    </div>
</template>

<script>
import { TransitionHeight } from '@/shared/transitions';
import SidebarItem from './SidebarItem.vue';

export default {
    components: { SidebarItem, TransitionHeight },

    props: {
        menu: { required: true, type: Object },
    },

    data() {
        return {
            opened: false,
        };
    },

    created() {
        this.opened = this.isActive || this.hasActiveChildren;
    },

    watch: {
        $route() {
            this.opened = this.isActive || this.hasActiveChildren;
        },
    },

    computed: {
        isActive() {
            return this.menu.active || this.menu.children.some((c) => c.active);
        },
        hasActiveChildren() {
            return this.menu.children.some(
                (child) => child.route && child.route.name === this.$route.name,
            );
        },
    },

    methods: {
        onItemClick(event) {
            this.$emit('child-click', event);
        },
    },
};
</script>

<style lang="scss" scoped>
.height-enter-active,
.height-leave-active {
    @apply transition-all duration-500 ease-in-out overflow-hidden;
}
</style>
