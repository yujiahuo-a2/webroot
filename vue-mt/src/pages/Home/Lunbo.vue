<template>
<div>
  <van-swipe :autoplay="2000" >
    <van-swipe-item v-for="(item,index) in images" :key="index">
      <img v-lazy="'../../../static/lunbo/'+item.index+'.jpg'">
    </van-swipe-item>

  </van-swipe>
</div>
</template>

<script>
export default {
  name: 'Lunbo',
  data () {
    return {
      images: [
        {
          index: 1
        },
        {
          index: 2
        },
        {
          index: 3
        },
        {
          index: 4
        },
      ]
    }
  } ,
  methods: {

  }
}
</script>

<style scoped>

.van-swipe{
  height:170px;
}
  .van-swipe-item{
    text-align: center;
  }
  img{
    width:375px;
    height:170px;
  }
</style>
