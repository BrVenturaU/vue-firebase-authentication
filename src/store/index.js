import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:{},
    loggedIn: false
  },
  mutations: {
    SET_LOGGED_IN(state, isLogged){
      state.loggedIn = isLogged;
    },
    SET_USER(state, usuario){
      state.usuario = usuario;
    }
  },
  actions: {
    verificarUsuario({commit}, usuario){
      commit('SET_LOGGED_IN', usuario != null);
      if(usuario){
        commit('SET_USER', usuario);
      }else{
        commit('SET_USER', null)
      }
    }
  },
  modules: {
  }
})
