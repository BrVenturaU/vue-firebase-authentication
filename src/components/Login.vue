<template lang="html">

  <section class="container">
    <b-row class="mt-5">
      <b-col cols="12">
        <h1>Inicio de Sesión</h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="8" md="6" class="mx-auto">
        <b-card>
            <b-form class="mx-auto" @submit.prevent="login">
                <b-form-group class="text-left" label="Correo:" description="Escriba su correo">
                  <b-form-input type="email" placeholder="john.doe@domain.com" required v-model="email"></b-form-input>
                </b-form-group>
                <b-form-group class="text-left" label="Contraseña" description="Escriba su contraseña">
                  <b-form-input type="password" placeholder="*********" required v-model="password"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="success" class="mr-3">Iniciar Sesión</b-button>
                <b-button variant="primary" @click="register" class="mr-3">Registrarse</b-button>
                <b-button variant="danger" type="reset">Limpiar</b-button>
            </b-form>
        </b-card>
      </b-col>
    </b-row>
  </section>

</template>

<script lang="js">
import firebase from "firebase/app";
import "firebase/auth";
  export default  {
    name: 'Login',
    props: [],
    mounted () {

    },
    data () {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      login(){
            let vm = this;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    console.log(data);
                    vm.$router.replace({ name: "Home" });
                })
                .catch((error) => {
                    alert(error.message);
                });
      },
      register(){
          this.$router.replace({name:'Register'})
      }
    },
    computed: {

    }
}


</script>

<style scoped>

</style>
