import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  bottomstate: true
}

const mutations = {
  changeBottom (bottomstate, status) {
    state.bottomstate = status
  }
}

export default new Vuex.Store({
  state,
  mutations
})
