<template>
  <div id="app">
    Hello, World.
  </div>
</template>

<script>
import { fetchRepositories } from './api/BitBucketApi'

export default {
  name: 'App',
  mounted: async function () {
    const result = await fetchRepositories("yanapiidxer")
    console.log(result)
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
