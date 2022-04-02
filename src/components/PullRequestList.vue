<template>
    <div>
        <template v-if="list.length">
            <table border="1">
                <tr v-for="item in list" :key="item.id">
                    <td>{{ item.title }}</td>
                    <td>
                        <button @click="addComment(item.id)">コメント</button>
                    </td>
                </tr>
            </table>
        </template>
        <template v-else>
            マージされていないプルリクエストがありません
        </template>
    </div>
</template>

<script>
import { fetchPullRequests, addCommentToPullRequest } from '../api/BitBucketApi'
import { mapGetters } from 'vuex'

export default {
    name: "PullRequestList",
    data: function () {
        return {
            list: [],
        }
    },
    mounted: async function () {
        const result = await fetchPullRequests(this.accessToken, 'yanapiidxer', 'vuetestproject')
        this.list = result.data.values
    },
    computed: {
        ...mapGetters(['accessToken']),
    },
    methods: {
        async addComment(prId) {
            const result = await addCommentToPullRequest(this.accessToken, 'yanapiidxer', 'vuetestproject', prId, "コメント")
            if (result.status !== 201) {
                alert("コメントに失敗しました")
                return
            }
            alert("コメントしました")
        }
    }
}
</script>
