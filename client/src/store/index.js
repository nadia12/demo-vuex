import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 5,
    todos: [],
  },
  mutations: {
    SET_COUNTER(state, payload) {
      state.counter++
    },
    SET_TODOS(state, payload) {
      state.todos = payload
    },
  },
  actions: { //dispatch
    // async process
    // context => commit, state, dispatch, getters
    deleteTodoDiStore({ state, commit }, payload) {
      // payload =>  {id}
      const todosStore = state.todos
      const newTodos = todosStore.filter((el) => el.id !== payload.id)

      // axios
      commit('SET_TODOS', newTodos)
    },

    getTodos(context, payload) {
      // payload => 'search text'

      axios
        .get(`https://jsonplaceholder.typicode.com/todos`)
        .then((response) => {
          // set state store => commit
          const allTodos = response.data
          context.commit('SET_TODOS', allTodos)

          // context.state.todos = response.data
        })
        .catch((err) => console.log(err))
    },

    filterTodo(context, search){
      const allTodos = context.state.todos
      const filtered = allTodos.filter((el) => el.title.indexOf(search) >  1)

      context.commit('SET_TODOS', filtered)
    }
  },
  getters: {},
})

  // const context = {
  //   state, => state
  //   commit, => mutations
  //   dispatch, => actions
  //   getters => getters
  // }