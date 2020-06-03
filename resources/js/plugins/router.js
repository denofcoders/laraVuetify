import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import SignIn from '../components/SignIn.vue'
import Landing from '../components/Landing.vue'
import store from '../store'

Vue.use(VueRouter);


let routes = [
    {
        path: '/',
        name: 'landing',
        component: Landing,
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

});

router.beforeEach((to, from, next) => {
    if (to.name === 'signin' && store.getters['authService/authenticated']){
        next({name: 'dashboard'});
    }
    if (to.name === 'landing') {
        next();
    } else if (to.name !== 'signin' && !store.getters['authService/authenticated'])
        next({name: 'signin'});
    else next();
});

export default router
