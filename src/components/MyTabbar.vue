<template>
  <div>
    <tabbar class="tabbar">
      <tabbar-item link="/articles">
        <img slot="icon" src="../assets/list.png">
        <span slot="label">文章列表</span>
      </tabbar-item>
      <tabbar-item link="/articles/new">
        <img slot="icon" src="../assets/new.png">
        <span slot="label">新建文章</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.tabbar {
  position: fixed;
}
</style>
