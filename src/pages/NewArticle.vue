<template>
  <div>
    <x-header :left-options="{showBack: false}">新建文章  {{ $store.state.user }}</x-header>
    <group>
      <x-input title="标题" v-model="article.title"></x-input>
    </group>
    <group>
      <x-input title="作者" v-model="article.author"></x-input>
    </group>
    <group>
      <x-textarea :rows="14" title="内容" v-model="article.content"></x-textarea>
    </group>
    <x-button type="primary" class="x-button" action-type="button" @click.native="saveArticle">保存</x-button>
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
      article: {
        title: '',
        author: '',
        content: ''
      }
    }
  },
  methods: {
    saveArticle: function () {
      this.$axios.post('http://rap2api.taobao.org/app/mock/1657/POST//articles', {title: this.article.title, author: this.article.author, content: this.article.content}).then((res) => {
        console.log(res.data)
        window.location.href = '/#/articles'
      })
    }
  },
  created () {
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
