<template>
  <div>
    <x-header :left-options="{showBack: false}">文章列表  {{ $store.state.user }}</x-header>
    <div v-for="article in articles">
      <div class="article">
        <router-link :to="{path: '/articles/' + article.id}">{{ article.title }}</router-link>
      </div>
    </div>
    <input v-model="name" type="text" @keyup.enter="$store.commit('change', name)">
  </div>
</template>

<script>
import { XHeader } from 'vux'

export default {
  components: {
    XHeader
  },
  data () {
    return {
      articles: [],
      name: ''
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList: function () {
      var _this = this
      this.$axios.get('http://rap2api.taobao.org/app/mock/1657/GET//articles')
        .then(function (response) {
          _this.articles = response.data.articles
          // console.log(response.data.articles)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.article {
  margin-top: 10px;
}
</style>
