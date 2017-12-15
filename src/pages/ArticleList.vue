<template>
  <div class="articlelist">
    <x-header :left-options="{showBack: false}">文章列表</x-header>
    <panel :header="('文章列表')" :list="articles" :type="type" class="list"></panel>
  </div>
</template>

<script>
import { XHeader, Icon, Panel } from 'vux'

export default {
  components: {
    XHeader,
    Icon,
    Panel
  },
  data () {
    return {
      articles: [],
      type: '2'
    }
  },
  created () {
    this.getList()
    if (!this.$store.state.changeBottom) {
      this.$store.commit('changeBottom', true)
    }
  },
  methods: {
    getList: function () {
      var _this = this
      this.$axios.get('http://rap2api.taobao.org/app/mock/1657/GET//articles')
        .then(function (response) {
          _this.articles = response.data.articles
          let articles = _this.articles
          for (var i = 0; i < articles.length; i++) {
            _this.setArticleSrc(i, articles[i].id)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    setArticleSrc: function (index, id) {
      this.$set(this.articles[index], 'url', '/articles/' + id)
    }
  }
}
</script>

<style scoped>
.list {
  margin-bottom: 50px;
}
</style>
