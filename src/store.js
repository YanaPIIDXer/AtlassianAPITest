import Vue from 'vue'
import Vuex from 'vuex'

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
})

export default store
