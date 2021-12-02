<template>
  <div>
    <p>foo</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Foo',
  setup() {
    const msg = ref('change me')
    return { msg }
  }
}
</script>