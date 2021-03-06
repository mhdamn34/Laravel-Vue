/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;
import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/Header.vue').default);
Vue.component('footer-component', require('./components/Footer.vue').default);

const Home = require('./pages/Home.vue').default
const About = require('./pages/About.vue').default
// const NotFound = require('./pages/NotFound.vue').default
import NotFound from './pages/NotFound.vue'
import User from './pages/User.vue'

const routes = [
    {
        name: 'Home',
        path: '/home',
        component: Home
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'User',
        path: '/user/:username?',
        component: User,
        props: true
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes
})

const app = new Vue({
    el: '#app',
    data: {
        title: 'Laravel 8 Vue'
    },
    router
});
