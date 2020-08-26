import Vue from 'vue';
import './bootstrap';

const pages = require.context('./pages', false, /\.vue$/i);
pages.keys().map((key) => Vue.component(key.split('/').pop().split('.')[0], pages(key).default));
const icons = require.context('./icons', true, /\.vue$/i);
icons.keys().map((key) => Vue.component(key.split('/').pop().split('.')[0], icons(key).default));
const layouts = require.context('./layouts', true, /\.vue$/i);
layouts.keys().map((key) => Vue.component(`Layouts${key.split('/').pop().split('.')[0]}`, layouts(key).default));

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
});
