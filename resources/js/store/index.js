import Vue from 'vue'
import Vuex from 'vuex'
import authService from './authService'   //auth service module

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        authService //auth service module
    }
})
