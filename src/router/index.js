import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import PullRequestList from '../components/PullRequestList.vue'

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
            name: "PullRequest",
            path: "/pull_request",
            component: PullRequestList,
        },
    ],
})