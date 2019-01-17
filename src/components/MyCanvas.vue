<template>
  <div>
    <el-input v-model="name"></el-input>
  </div>
</template>

<script>
export default {
  name: 'MyCanvas',
  props: {
    msg: String
  },
  data () {
    return {
      name: this.msg
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
