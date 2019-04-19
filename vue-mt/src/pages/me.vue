<template>
<div>
  <van-cell-group>
    <van-field
      v-model="username"
      required
      clearable
      label="用户名"
      right-icon="question-o"
      placeholder="请输入用户名"
      @click-right-icon="$toast('question')"
    />

    <van-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      required
    />
  </van-cell-group>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'me',
  mounted () {
    axios.get('/static/data.json').then(
      response => {
        console.log(response)
      }
    ).catch(
      error => {
        console.log(error)
      })
    axios.get('/static/data.json', {
      params: {
        ID: 12345
      }
    }).then(
      response => {
        console.log(response)
      }
    ).catch(
      error => {
        console.log(error)
      }
    )
  }
}
</script>

<style scoped>

</style>
