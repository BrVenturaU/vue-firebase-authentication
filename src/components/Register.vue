<template lang="html">

  <section class="container">
    <b-row class="mt-5">
      <b-col cols="12">
        <h1>Crea tu cuenta</h1>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" sm="8" md="6" class="mx-auto">
        <b-card>
            <b-form class="mx-auto" @submit.prevent="register">
                <b-form-group class="text-left" label="Tu nombre:" description="Escriba su nombre">
                  <b-form-input type="text" placeholder="Tu nombre..." required v-model="nombre"></b-form-input>
                </b-form-group>
                <b-form-group class="text-left" label="Correo:" description="Escriba su correo">
                  <b-form-input type="email" placeholder="john.doe@domain.com" required v-model="email"></b-form-input>
                </b-form-group>
                <b-form-group class="text-left" label="Contraseña" description="Escriba su contraseña">
                  <b-form-input type="password" placeholder="*********" required v-model="password"></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="success" class="mr-3">Registrarme</b-button>
                <b-button variant="primary" @click="login" class="mr-3">Iniciar Sesión</b-button>
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
    name: 'Register',
    props: [],
    mounted () {

    },
    data () {
      return {
            name:"",
            email: "",
            password: ""
      }
    },
    methods: {
      register(){
            let vm = this;
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    data.user
                        .updateProfile({
                            displayName: this.nombre
                        })
                        .then(() => {
                            vm.$router.replace({name:'Home'})
                        });
                })
                .catch(err => {
                    this.error = err.message;
                });
      },
      login(){
          this.$router.replace({name: 'Login'})
      }
    },
    computed: {

    }
}


</script>

<style scoped>

</style>
