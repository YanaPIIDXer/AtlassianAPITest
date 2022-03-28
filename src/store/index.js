import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    state: {
        accessKey: ''
    },
    getters: {
        accessKey (store) {
            return store.accessKey
        }
    },
    mutations: {
        setAccessKey (store, payload) {
            store.accessKey = payload
        }
    }
}
