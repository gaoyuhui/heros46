import Vue from 'vue';
import App from './App.vue';

import router from './routes/router'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost:3000/';
import axios from 'axios';
new Vue({
  el: '#app',
  render: h => h(App),
  router,

});
