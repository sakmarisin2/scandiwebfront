import { createStore } from 'vuex';

export const store = createStore({
  state () {
    return {
      currentType: "DVD"
    }
  },
  mutations: {
    SetCurrentType (state, type) {
      state.currentType = type
    }
  }
})