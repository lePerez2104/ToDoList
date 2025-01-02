import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    }
  },
  actions: {
    getTodos() {
      axios.get('http://localhost:3000/todos')
      .then((response) => {
        this.$store.commit('storeTodos', response.data)
    })
      .finally( () => {
        this.loading = false
    })
    }
  },
  getters: {
  },
  modules: {
  }
})
