/* eslint-disable no-new */
import Vue from 'vue';
import './bootstrap';
import './icons';
import router from './routes';

new Vue({
    el: '#app',
    router,
    created() {
        console.log('app created');
    },
});
