import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    todoList: []
  },
  mutations: {
    PUSH_TODO_ITEM(state, item) {
      state.todoList.push(item)
    },

    REMOVE_TODO_ITEM(state, index) {
      state.todoList.splice(index, 1)
    },
  },
  actions: {
  },
  modules: {
  }
})
