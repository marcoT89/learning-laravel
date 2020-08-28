import Vue from 'vue';
import VueRouter from 'vue-router';
import Default from './layouts/Default.vue';

Vue.use(VueRouter);

const ParentComponent = { template: '<transition name="page" mode="out-in"><router-view></router-view></transition>' };

export const routes = [
    {
        path: '/',
        name: 'home',
        icon: 'home',
        label: 'Dashboard',
        exact: true,
        component: () => import('@/pages/Dashboard.vue'),
    },
    {
        path: '/users',
        name: 'users',
        icon: 'user-group',
        label: 'Users',
        component: () => import('@/pages/Users.vue'),
    },
    {
        path: 'reports',
        label: 'Reports',
        icon: 'chart-bar',
        component: ParentComponent,
        children: [
            {
                path: 'users',
                name: 'reports.users',
                label: 'Users Reports',
                component: () => import('@/pages/UsersReports.vue'),
            },
            {
                path: 'posts',
                name: 'reports.posts',
                label: 'Posts Reports',
                component: () => import('@/pages/PostsReports.vue'),
            },
        ],
    },
    {
        path: '/settings',
        name: 'settings',
        icon: 'cog',
        label: 'Settings',
        component: () => import('@/pages/Settings.vue'),
    },
];

export default new VueRouter({
    routes: [
        { path: '', component: Default, children: routes },
    ],
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
});
