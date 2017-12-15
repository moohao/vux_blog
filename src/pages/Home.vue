<template>
  <div>
    <div class="vux-logo">
      <img class="logo" src="../assets/logo1.png">
    </div>
    <h2><router-link to="/articles">{{ msg }}</router-link></h2>
  </div>
</template>

<script>
import { Group, Cell, XHeader, Divider, Grid, GridItem, Scroller } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XHeader,
    Divider,
    Grid,
    GridItem,
    Scroller
  },
  data () {
    return {
      msg: '进入我的博客！'
    }
  },
  created () {
    this.$store.commit('changeBottom', false)
  }
}
</script>

<style scoped>
.vux-logo {
  text-align: center;
}
.logo {
  margin-top: 40%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
h2 {
  margin-top: 10px;
  text-align: center;
}
</style>
