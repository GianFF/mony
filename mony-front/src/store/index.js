import Vuex from 'vuex'
import { MUTATION_SET_CECOS, MUTATION_SET_CECO, MUTATION_SET_GASTO } from './mutations'
import { ACTION_GET_CECOS, ACTION_SET_GASTO } from './actions'
import mony from '../api'

const store = () => new Vuex.Store({
  state: {
    cecos: [],
    ceco: {},
    gasto: 0,
  },
  mutations: {
    [MUTATION_SET_CECOS] (state, cecos) {
      state.cecos = cecos
    },
    [MUTATION_SET_CECO] (state, ceco) {
      state.ceco = ceco
    },
    [MUTATION_SET_GASTO] (state, gasto) {
      state.gasto = gasto
    },
  },
  actions: {
    // action used to seed backend on development mode
    async seed () {
      await mony.seed()
    },
    async [ACTION_GET_CECOS] ({commit}) {
      const response = await mony.cecos()
      commit(MUTATION_SET_CECOS, response.cecos)
    },
    async [ACTION_SET_GASTO] ({state}) {
      await mony.postGasto(state.gasto, state.ceco.id)
    },
  }
})

export default store