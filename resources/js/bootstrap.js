import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
