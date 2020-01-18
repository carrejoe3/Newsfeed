import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: null
  },
  mutations: {
    updateArticles (state, articles) {
      state.articles = articles
    }
  },
  actions: {
  },
  modules: {
  }
})
