<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body,#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin-top: 0px;
  margin-left: 0px;
}
</style>
