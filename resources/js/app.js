window.Vue = require('vue');
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import {AlertError, Form, HasError} from 'vform';
import store from './store' // vuex
require('./store/subscriber');

window.axios = require('axios');
window.Form = Form;

Vue.component('app-root', require('./components/App.vue').default);

store.dispatch('authService/validateToken', localStorage.getItem('token')).then(() => {

    new Vue({
        el: '#app',
        vuetify,
        router,
        store,
    });
});
