<template>
  <div id="app">
    <router-view></router-view>
    <my-tabbar></my-tabbar>
  </div>
</template>

<script>
import MyTabbar from './components/MyTabbar'
export default {
  name: 'app',
  components: {
    MyTabbar
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
