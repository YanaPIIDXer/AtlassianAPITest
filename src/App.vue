<template>
  <div id="app">
    Hello, World.
  </div>
</template>

<script>
import { fetchAccessToken } from './api/BitBucketApi'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  mounted: async function () {
    const accessToken = await fetchAccessToken(process.env.VUE_APP_ACCESS_KEY, process.env.VUE_APP_ACCESS_SECRET)
    this.setAccessToken(accessToken)
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
