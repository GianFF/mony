<template>
  <div class="contenedor">
    <select class="cecos" v-model="ceco">
      <option value=""></option>     
      <option v-for="ceco in cecos" v-bind:key="ceco.id" v-bind:value="ceco"> 
        {{ceco.titulo}} 
      </option>
    </select>
  </div>
</template>

<script>
import { MUTATION_SET_CECO } from '../store/mutations';
import { mapMutations } from 'vuex';
export default {
  name: 'CeCos',
  props: {
    cecos: {
      type: Array,
    },
  },
  computed: {
    ceco: {
      get () {
        return ''
      },
      set (ceco) {
        this.setCeco(ceco)
      },
    },
  },
  methods: {
    ...mapMutations({
      setCeco: MUTATION_SET_CECO,
    }),
  },
}
</script>

<style scoped>

</style>
