<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>
    <router-link id="router-link" to="/foo">go to foo</router-link>
    <router-link id="router-link" to="/bar">go to bar</router-link>
  </p>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
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
