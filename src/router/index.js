import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Top from '../views/Top.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: "Login",
            path: "/",
            component: Login,
        },
        {
            name: "Top",
            path: "/top",
            component: Top,
        },
    ],
})