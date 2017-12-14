import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component (resolve) {
        require(['../pages/Home.vue'], resolve)
      }
    },
    {
      path: '/articles',
      component (resolve) {
        require(['../pages/ArticleList.vue'], resolve)
      }
    },
    {
      path: '/articles/new',
      component (resolve) {
        require(['../pages/NewArticle.vue'], resolve)
      }
    },
    {
      path: '/articles/:id',
      component (resolve) {
        require(['../pages/ShowArticle.vue'], resolve)
      }
    }
  ]
})
