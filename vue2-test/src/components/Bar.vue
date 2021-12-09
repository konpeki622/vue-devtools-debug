<template>
  <div>
    <p>{{ message }}</p>
    <hello-world msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  name: 'Bar',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'test'
    }
  }
}
</script>