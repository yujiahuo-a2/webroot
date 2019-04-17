<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" >

      <mu-select  v-model="normal.value1" slot="left">
        <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
      <mu-text-field  v-model="value1" placeholder="自助火锅">  </mu-text-field>
      <mu-button icon slot="right">
        <mu-icon value="crop_free"></mu-icon>
        <p>扫码</p>
      </mu-button>

    </mu-appbar>
  </div>
</template>

<script>
export default {
  name: 'Daohang',
  data () {
    return {
      options: [
        '北京', '上海', '天津', '重庆',
        '江苏', '浙江', '安徽'
      ],
      normal: {
        value1: '北京',
        value2: '',
        value3: '',
        value4: '',
        value5: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
<style>
  .mu-icon{
    color:#fff;
  }
  /*左边定位*/
  .mu-appbar-left{
    margin-left:10px;
    padding-right:0;
  }
  .mu-appbar-left .mu-input{
    width:50px;
  }
  .mu-appbar-left .mu-input{
    color:#fff;
    margin-bottom: 0px;
  }
  .mu-appbar-left .mu-select-input{
    color:#fff;
  }
  .mu-appbar-left .mu-input-line{
    height:0px;
  }
  .mu-appbar-left .mu-select-action{
    width:20px;
    padding:0px;
  }
  /*中间搜索*/
  .mu-appbar-title{
    padding-left:5px;
    padding-bottom:10px;
    color:#fff;

  }
  .mu-appbar-title .mu-input{
    margin-bottom:0px;
  }
  .mu-appbar-title .mu-text-field-input{
    color:#fff;
  }
  .mu-appbar-title .mu-input-line{
    height:0.5px;
    background-color:#fff;
  }
    /*右边扫码*/
  .mu-appbar-right .mu-button{
    position: absolute;
    top:0px;
    right:0px;
  }
  .mu-appbar-right .mu-button p {
    position: absolute;
    bottom:-8px;
    font-size: 10px;
    margin-top: 0;
  }
</style>
