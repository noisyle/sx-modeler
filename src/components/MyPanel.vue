<template>
  <div>
    <el-input v-model="name"></el-input>
  </div>
</template>

<script>
export default {
  name: 'MyPanel',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
