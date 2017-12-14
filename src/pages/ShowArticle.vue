<template>
  <div>
    <x-header :left-options="{showBack: false}">文章详情  {{ $store.state.user }}</x-header>
    <group>
      <x-input title="标题" v-model="article.title"></x-input>
    </group>
    <group>
      <x-input title="作者" v-model="article.author"></x-input>
    </group>
    <group>
      <x-textarea :rows="16" title="内容" v-model="article.content"></x-textarea>
    </group>
    <x-button type="primary" class="x-button" action-type="button" @click.native="editArticle">修改</x-button>
  </div>
</template>

<script>
import { Group, XInput, XTextarea, XHeader, XButton } from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    XHeader,
    XButton
  },
  data () {
    return {
      article: {}
    }
  },
  methods: {
    getArticle: function () {
      var _this = this
      this.$axios.get('http://rap2api.taobao.org/app/mock/1657/GET//articles/100001')
          .then(function (response) {
            _this.article = response.data
            // console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
    },
    editArticle: function () {
      this.$axios.put('http://rap2api.taobao.org/app/mock/1657/PUT//articles/123321/edit', { title: this.article.title, author: this.article.author, content: this.article.content }).then((res) => {
        console.log(res.data)
        window.location.href = '/#/articles'
      })
    }
  },
  created () {
    this.getArticle()
  }
}
</script>

<style scoped>
.x-button {
  margin-top: 20px;
}
</style>
