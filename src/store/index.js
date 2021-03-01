import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase";
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
    verificarUsuario: async({commit})=>{
      firebase.auth().onAuthStateChanged(usuario => {
        commit('SET_LOGGED_IN', usuario !== null);
        if(usuario){
          commit('SET_USER', {
            nombre: usuario.displayName,
            email: usuario.email
          });
        }else{
          commit('SET_USER', null)
        }
      });
    }
  },
  getters:{
    auth(state){
      return state.loggedIn;
    }
  },
  modules: {
  }
})
