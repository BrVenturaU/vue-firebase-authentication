<template lang="html">
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        Page
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name:'Home'}">Home</b-nav-item>
          <b-nav-item :to="{name:'About'}">About</b-nav-item>

            <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>{{usuario != null ? usuario.nombre : ''}}</em>
                </template>
                <b-dropdown-item href="#">Perfil</b-dropdown-item>
                <b-dropdown-item href="#" @click="logout">Cerrar Sesión</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="js">
import firebase from "firebase/app";
import {mapState, mapActions} from 'vuex'
import "firebase/auth";
  export default  {
    name: 'src-components-header',
    props: [],
    data () {
      return {

      }
    },
    computed:{
        ...mapState(['usuario'])
    },
    methods: {
      ...mapActions(['verificarUsuario']),
      logout(){
          let vm = this
        firebase.auth().signOut()
          .then(() => {
            return vm.verificarUsuario();
          })
          .then(() => {
            this.$router.replace({name:'Auth'});
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    }
}


</script>

<style scoped>

</style>
