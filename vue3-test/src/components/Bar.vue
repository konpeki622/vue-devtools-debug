<template>
  <div>
    <p>{{ message }}</p>
    <hello-world msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import { ref } from 'vue'

export default {
  name: 'Bar',
  components: {
    HelloWorld
  },
  setup() {
    const message = ref('test')
    return { message }
  }
}
</script>