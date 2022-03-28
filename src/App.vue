<template>
  <div id="app" v-if="accessToken">
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
    const accessToken = await fetchAccessToken(process.env.VUE_APP_ACCESS_KEY, process.env.VUE_APP_ACCESS_SECRET)
    this.setAccessToken(accessToken)
  },
  computed: {
    ...mapGetters(["accessToken"])
  },
  methods: {
    ...mapMutations(["setAccessToken"]),
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
