import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        bitBucketAccessToken: '',
    },
    getters: {
        /**
         * BitBucketのアクセストークン
         */
        bitBucketAccessToken: (state) => {
            return state.bitBucketAccessToken
        },
    },
    mutations: {
        /**
         * BitBucketのアクセストークンをセット
         */
        setBitBucketAccessToken: (state, payload) => {
            state.bitBucketAccessToken = payload
        },
    },
    plugins: [createPersistedState({ storage: window.sessionStorage })],
})

export default store
