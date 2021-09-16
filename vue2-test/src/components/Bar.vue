<template>
  <div>
    <p>bar</p>
    <hello-world msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'Bar',
  components: {
    HelloWorld
  }
}
</script>