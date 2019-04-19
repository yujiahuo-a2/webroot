<template>
    <div>
      <van-list
        v-model="loading"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="(item,index) in list" :key="index">
          <van-card>
            <div slot="title" >
              <strong >
                {{item.title}}
              </strong>
              <div style="float:right;width:auto;text-align: center ;color:red;font-weight:bold;">
                ￥ {{item.price}}
              </div>
            </div>
            <div slot="desc" style="width:200px;line-height: 15px;">
                    <span class="desc1">
                      {{item.desc1}}
                    </span>
              <span class="desc2">
                      {{item.desc2}}
              </span>
              <mu-badge content="电点秀萝" secondary color="primary" slot="after"></mu-badge>
            </div>
            <div slot="thumb">
              <img v-lazy="'/static/shoplog/'+item.imgurl" />
            </div>
          </van-card>

        </van-cell>
      </van-list>
    </div>
</template>

<script>
import axios from 'axios'

const url = "http://localhost:8080/static/data.json"
export default {
  data () {
    return {
      list: [],
      refreshing: false,
      loading: false,
      text: 'List'
    }
  },
  mounted () {
    axios.get(url).then(res => {
      this.list = res.data
    })
  },
  methods: {
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
      }, 500)
    }
  }
}
</script>

<style scoped>

  .van-cell{
    padding:0px;
  }
  /*商品详情*/
  /*图片*/
  .van-card__thumb{
    width:160px;
  }
  .van-card__thumb div{
    width:160px;
    height:90px;
  }

  .desc1,.desc2{
    height:15px;
    display: inline-block;
    width:120px;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    line-height: 15px;
    margin-bottom: 2px;
  }
  .desc2{
    width:185px;
  }
</style>
