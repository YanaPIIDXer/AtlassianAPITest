<template>
  <div id="app">
    Hello, World.
  </div>
</template>

<script>
import { fetchAccessKey, fetchRepositories } from './api/BitBucketApi'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  mounted: async function () {
    const accessKey = await fetchAccessKey(process.env.VUE_APP_ACCESS_KEY, process.env.VUE_APP_ACCESS_SECRET)
    this.setAccessKey(accessKey)
    
    const result = await fetchRepositories("yanapiidxer")
    console.log(result)
  },
  methods: {
    ...mapMutations(["setAccessKey"]),
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
