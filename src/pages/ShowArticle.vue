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
      <x-textarea :rows="14" title="内容" v-model="article.content"></x-textarea>
    </group>
    <flexbox>
        <flexbox-item>
          <x-button type="primary" class="x-button" action-type="button" @click.native="editArticle">修改</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button type="warn" class="x-button" @click.native="deleteArticle($route.params.id)">删除</x-button>
        </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Group, XInput, XTextarea, XHeader, XButton, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Group,
    XInput,
    XTextarea,
    XHeader,
    XButton,
    Flexbox,
    FlexboxItem
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
    },
    deleteArticle: function (id) {
      this.$axios.delete('http://rap2api.taobao.org/app/mock/1657/DELETE//articles/123321').then((res) => {
        console.log(res.data)
        console.log(id)
        window.location.href = '/#/articles'
      })
    }
  },
  created () {
    this.getArticle()
    if (!this.$store.state.changeBottom) {
      this.$store.commit('changeBottom', true)
    }
  }
}
</script>

<style scoped>
.x-button {
  margin: 10px 0 60px 0;
}
</style>
