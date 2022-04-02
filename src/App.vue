<template>
  <div id="app" v-if="bitBucketAccessToken">
    <PullRequestList />
  </div>
</template>

<script>
import { fetchAccessToken } from './api/BitBucketApi'
import { mapMutations, mapGetters } from 'vuex'
import PullRequestList from './components/PullRequestList'

export default {
  name: 'App',
  components: {
    PullRequestList,
  },
  created: async function () {
    await this.fetchBitBucketAccessToken()
  },
  computed: {
    ...mapGetters(["bitBucketAccessToken"])
  },
  methods: {
    ...mapMutations(["setBitBucketAccessToken"]),
    fetchBitBucketAccessToken: async function () {
      const token = await fetchAccessToken(process.env.VUE_APP_BITBUCKET_ACCESS_KEY, process.env.VUE_APP_BITBUCKET_ACCESS_SECRET)
      this.setBitBucketAccessToken(token)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
