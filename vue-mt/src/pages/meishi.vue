<template>
  <div>
    meishi
    <button  @click="backBtn">返回</button>
  </div>
</template>

<script>
export default {
  name: 'meishi',
  methods: {
    backBtn () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
