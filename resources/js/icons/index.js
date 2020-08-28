import Vue from 'vue';

const icons = require.context('./', false, /\.vue$/i);
icons.keys().map((filepath) => Vue.component(filepath.split('/').pop().split('.')[0], icons(filepath).default));
