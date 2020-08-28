<template>
    <div
        @click.stop="opened = !opened"
        class="mx-3 mt-1 px-1 py-1 rounded-lg cursor-pointer hover:bg-gray-700 hover:opacity-100 transition duration-150 ease-in-out"
    >
        <div class="px-3 py-1 flex items-center text-white">
            <icon
                v-if="route.icon"
                :name="route.icon"
                class="w-5 h-5 mr-3"
                :class="active ? 'text-blue-500' : 'opacity-50'"
            ></icon>
            <span class="mr-3">{{ route.label }}</span>
            <icon
                name="chevron-down"
                class="w-4 h-4 ml-auto text-white opacity-50 transition-transform duration-500 ease-in-out"
                :class="{ 'transform rotate-180': opened }"
            ></icon>
        </div>

        <transition-height name="height">
            <nav v-if="opened" class="mt-2 flex flex-col" @click.stop>
                <sidebar-item
                    class="pr-3 pl-11 py-1 mt-1 flex items-center text-white rounded-lg"
                    v-for="child of route.children"
                    :key="child.name"
                    :to="child"
                    :route="child"
                    @click.native="$emit('click', $event)"
                >
                </sidebar-item>
            </nav>
        </transition-height>
    </div>
</template>

<style lang="scss" scoped>
.height-enter-active,
.height-leave-active {
    @apply transition-all duration-500 ease-in-out overflow-hidden;
}
.height-leave-to {
    @apply mt-0;
}
</style>

<script>
import TransitionHeight from '@/shared/transitions/TransitionHeight.vue';
import SidebarItem from './SidebarItem.vue';

export default {
    components: { TransitionHeight, SidebarItem },

    props: {
        route: { required: true, type: Object },
    },

    data() {
        return {
            opened: false,
        };
    },

    created() {
        this.opened = this.active;
    },

    watch: {
        active() {
            this.opened = this.active;
        },
    },

    computed: {
        active() {
            return this.route.children.some((childRoute) => childRoute.name === this.$route.name);
        },
    },
};
</script>
