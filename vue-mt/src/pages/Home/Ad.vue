<template>
<div>
  <mu-row gutter tag="first-ad">
    <mu-col span="4"><div class="grid-cell">周三半价</div></mu-col>
    <mu-col span="4"><div class="grid-cell">免单伙食</div></mu-col>
    <mu-col span="4"><div class="grid-cell">国庆特价</div></mu-col>
  </mu-row>
  <mu-divider></mu-divider>
  <mu-row gutter tag="second-ad">
    <mu-col span="3"><div class="grid-cell">10元红包</div></mu-col>
    <mu-col span="3"><div class="grid-cell">免费专区</div></mu-col>
    <mu-col span="3"><div class="grid-cell">畅想游乐</div></mu-col>
    <mu-col span="3"><div class="grid-cell">优惠精选</div></mu-col>
  </mu-row>
  <mu-divider></mu-divider>
  <mu-row gutter>
    <mu-col span="12"><div class="grid-cell">image</div></mu-col>
  </mu-row>
</div>
</template>

<script>
export default {
  name: 'Ad'
}
</script>

<style scoped>
.grid-cell{
  text-align: center;
  height:1rem;
  line-height: 1rem;
}
first-ad .col{
  border-right:1px solid #eee;
}
second-ad .col{
  border-right:1px solid #eee;
}
</style>
