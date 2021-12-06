<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <foo />
  </div>
</template>

<script>
import Foo from './Foo.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Foo
  }
}
</script>
