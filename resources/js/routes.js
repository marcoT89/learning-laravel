import VueRouter from 'vue-router';
import App from '@/layouts/App';

const routes = [
    { name: 'home', path: '/', component: () => import('./pages/Dashboard.vue') },
    { name: 'users', path: '/users', component: () => import('./pages/Users.vue') },
    { name: 'reports.users', path: '/reports/users', component: () => import('./pages/UsersReports.vue') },
    { name: 'reports.posts', path: '/reports/posts', component: () => import('./pages/PostsReports.vue') },
    { name: 'settings', path: '/settings', component: () => import('./pages/Settings.vue') },
    { name: 'activites', path: '/activites', component: () => import('./pages/Activities.vue') },
];

export default new VueRouter({
    routes: [
        { path: '/', component: App, children: routes },
    ],
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active',
});
