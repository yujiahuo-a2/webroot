<template>
 <div>
   <router-view></router-view>
  <mu-container id="footer">
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item title="首页" icon="home" value="/home"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="附近" icon="pin_drop" value="/recent"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="逛一逛" icon="language" value="/guang"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="订单" icon="assignment" value="/order"></mu-bottom-nav-item>
      <mu-bottom-nav-item title="我的" icon="account_circle" value="/me"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </mu-container>
 </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      bottomNav: '/home'
    }
  },
  methods: {
    handleChange: function (val) {
      this.bottomNav = val
      this.$router.push(val)
    }

  },
  mounted () {
    this.bottomNav = this.$route.path
  }
}
</script>

<style scoped>
  #footer{
    position: fixed;
    bottom:0;
    right:0;
    left:0;
    padding:0;
  }
  #footer .mu-bottom-item{
    min-width:0.62rem;
  }
</style>
