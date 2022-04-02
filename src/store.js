import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        bitBucketAccessToken: '',
    },
    getters: {
        bitBucketAccessToken: (state) => {
            return state.bitBucketAccessToken
        },
    },
    mutations: {
        setBitBucketAccessToken: (state, payload) => {
            state.bitBucketAccessToken = payload
        },
    },
})

export default store
