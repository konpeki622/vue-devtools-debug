<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>
      <router-link id="router-link" to="/foo">go to foo</router-link>
      <router-link id="router-link" to="/bar">go to bar</router-link>
    </p>
    <transition>
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
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

#router-link {
  margin: 0 10px;
}
</style>
