import Vue from 'vue';
import './bootstrap';
import router from './routes';

const icons = require.context('./icons', true, /\.vue$/i);
icons.keys().map((key) => Vue.component(key.split('/').pop().split('.')[0], icons(key).default));

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    router,
});
