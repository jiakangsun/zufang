import Vue from 'vue'
import Vuex from 'vuex'
// 永久储存token插件
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  // 指定的存储方式 是本地存储
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    label: '',
    cityId: ''
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLabel (state, payload) {
      state.label = payload
    },
    setCityId (state, payload) {
      state.cityId = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
