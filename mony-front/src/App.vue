<template>
  <div id="app" class="contenedor">
    <h1>Cargar gasto</h1>
    <CeCos :cecos="cecos"></CeCos>
    <CargaDeGasto></CargaDeGasto>
    <Boton></Boton>
  </div>
</template>

<script>
import CeCos from './components/CeCos.vue'
import CargaDeGasto from './components/CargaDeGasto.vue'
import Boton from './components/Boton.vue'
import { INCREMENT } from '../src/store/mutations'
import { ACTION_GET_CECOS } from '../src/store/actions'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    CeCos,
    CargaDeGasto,
    Boton,
  },
  computed: {
    cecos() {
      return this.$store.state.cecos
    }
  },
  methods: {
    ...mapActions({
      getCecos: ACTION_GET_CECOS,
      seed: 'seed',
    }),
  },
  created() {
    this.seed()
    this.getCecos()
  },
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;

  width: 100%;
  height: 1000%;

  margin-top: 120px;
}

body {
  background-color: #2c3e50;
}

h1 {
  text-shadow: 6px 6px 15px black
}

select, input {
  width: 200px;

  background-color: white;
  border: none;
  
  font-size: 28px;
  color:  rgb(1, 6, 53);

  box-shadow: 10px 10px 15px black;
}

.contenedor {
  margin-top: 60px;
}
</style>
  