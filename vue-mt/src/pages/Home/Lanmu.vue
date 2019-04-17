<template>
<div>
  <mu-flex class="flex-wrapper1" justify-content="content" >
    <mu-flex class="flex-demo1" justify-content="center" >
      <router-link to="/meishi">美食</router-link>
    </mu-flex>
    <mu-flex class="flex-demo1" justify-content="center" >电影</mu-flex>
    <mu-flex class="flex-demo1" justify-content="center" >酒店</mu-flex>
    <mu-flex class="flex-demo1" justify-content="center" >休闲</mu-flex>
    <mu-flex class="flex-demo1" justify-content="center" >外卖</mu-flex>
  </mu-flex>
  <mu-divider></mu-divider>
  <mu-flex class="flex-wrapper" justify-content="conten">
    <mu-flex class="flex-demo" justify-content="center" >周边游</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" >机票</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" >丽人</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" >KTV</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" >美团旅游</mu-flex>
  </mu-flex>
  <mu-flex class="flex-wrapper" justify-content="conten">
    <mu-flex class="flex-demo" justify-content="center" >景点</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" >结婚</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" >母音</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" >生活</mu-flex>
    <mu-flex class="flex-demo" justify-content="center" >全部分类</mu-flex>
  </mu-flex>
</div>
</template>

<script>
export default {
  name: 'Lanmu'
}
</script>

<style scoped>

  .flex-wrapper1 {
     width: 100%;
     height: 1rem;
     margin-top: 8px;
   }
  .flex-wrapper {
    width: 100%;
    height: 0.56rem;
    margin-top: 8px;
  }
  .flex-demo1 {
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    margin-left: 8px;
  }
  .flex-demo {
    width: 0.8rem;
    height:56px;
    text-align: center;
    line-height: 56px;
    margin-left: 8px;
  }
  .flex-wrapper:first-child {
    margin-top: 0;
  }
  .flex-demo1:first-child {
    margin-left: 0;
  }
  .flex-demo:first-child {
    margin-left: 0;
  }
</style>
