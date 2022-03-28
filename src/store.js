import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        accessToken: '',
    },
    getters: {
        accessToken: (state) => {
            return state.accessToken
        },
    },
    mutations: {
        setAccessToken: (state, payload) => {
            state.accessToken = payload
        },
    },
})

export default store
