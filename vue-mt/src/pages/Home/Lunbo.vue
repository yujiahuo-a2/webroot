<template>
<div>
  <van-swipe :autoplay="2000" >
    <van-swipe-item v-for="(img,index) in autoImages" :key="index" :style="'background-color:'+img.color">
      {{img.text}}
    </van-swipe-item>

  </van-swipe>
</div>
</template>

<script>
export default {
  name: 'Lunbo',
  data () {
    return {
      autoImages: [
        {color:"red",text:'1',index:1},
        {color:"green",text:'2',index:2},
        {color:"blue",text:'3',index:3},
        {color:"pink",text:'4',index:4},
        {color:"yellow",text:'5',index:5},
      ]
    }
  } ,
  methods: {

  }
}
</script>

<style scoped>
.van-swipe{
  height:100px;
}
  .van-swipe-item{
    text-align: center;
  }
</style>
