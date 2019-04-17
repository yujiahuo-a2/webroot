<template>
<DIV>
<daohang></daohang>
  <luobo></luobo>
  <lanmu></lanmu>
  <mu-divider></mu-divider>
  <ad></ad>
  <mu-divider></mu-divider>

  <shop></shop>
</DIV>
</template>

<script>
import Daohang from './Daohang'
import Luobo from './Lunbo'
import Lanmu from './Lanmu'
import Ad from './Ad'
import Shop from './Shop'

export default {
  name: 'home',
  components: {
    Daohang,
    Luobo,
    Lanmu,
    Ad,
    Shop
  }

}
</script>

<style scoped>

</style>
