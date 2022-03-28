<template>
    <div>
        PullRequestList
    </div>
</template>

<script>
import { fetchPullRequests } from '../api/BitBucketApi'
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
        console.log(this.list)
    },
    computed: {
        ...mapGetters(['accessToken']),
    }
}
</script>
