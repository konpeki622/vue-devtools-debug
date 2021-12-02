<template>
  <div>
    <p>foo</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data() {
    return {
      msg: 'change me'
    }
  }
}
</script>