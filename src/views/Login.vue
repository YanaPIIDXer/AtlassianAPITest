<template>
    <div>
        <button @click="logIn">ログイン</button>
    </div>
</template>

<script>
import { fetchAccessToken } from '../api/BitBucketApi'
import { mapMutations } from 'vuex'

export default {
    name: "Login",
    methods: {
        ...mapMutations(["setBitBucketAccessToken"]),

        /**
         * ログイン処理
         */
        logIn: async function () {
            let result = await this.fetchBitBucketAccessToken()
            if (!result) {
                alert("BitBucketのアクセストークン取得に失敗しました")
                return
            }

            this.$router.push({name: "PullRequest"})
        },

        /**
         * BitBucketのアクセストークンを取得
         */
        fetchBitBucketAccessToken: async function () {
            try {
                const token = await fetchAccessToken(process.env.VUE_APP_BITBUCKET_ACCESS_KEY, process.env.VUE_APP_BITBUCKET_ACCESS_SECRET)
                this.setBitBucketAccessToken(token)
            } catch (error) {
                console.error(error)
                return false
            }
            return true
        },
    }
}
</script>
