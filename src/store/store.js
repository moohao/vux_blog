import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: '张三'
}

const mutations = {
  change (user, name) {
    state.user = name
  }
}

export default new Vuex.Store({
  state,
  mutations
})
