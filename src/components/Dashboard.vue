<template>
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mx-auto mb-4" v-for="pokemon of pokemones" :key="pokemon.id">
                <b-card :title="pokemon.name" :img-src="pokemon.sprites.front_default" :img-alt="pokemon.name" img-top >
                    <hr class="bg-primary">
                    <h6>Habilidades</h6>
                    <b-list-group v-for="(habilidad, index) in pokemon.abilities" :key="index">
                        <b-list-group-item>{{habilidad.ability.name}}</b-list-group-item>
                    </b-list-group>
                    <template #footer>
                        <small class="text-muted">Experiencia base: {{pokemon.base_experience}}px</small>
                    </template>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            pokemones:[]
        }
    },
    created(){
        this.cargar();
    },
    methods:{
        cargar(){
            let vm = this
            fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
                .then(data => data.json())
                .then(data =>{
                    data.results.forEach(async(d) => {
                        vm.pokemones.push(await vm.cargarId(d.url))
                    });
                })
                .catch(error =>{
                    console.log(error)
                })
        },
        cargarId: async(url)=>{
            let data = await fetch(url);
            let pokemon = await data.json();
            return pokemon;
        }
    }
}
</script>