import Vue from 'vue'
import Vuex from 'vuex'
import defaultBoard from './default-board'
import { saveStatePlugin } from './utils' // <-- Import saveStatePlugin

Vue.use(Vuex)

const board = JSON.parse(localStorage.getItem('board')) || defaultBoard

export default new Vuex.Store({
  plugins: [ saveStatePlugin ], // <-- Use 
  state: {
    board
  },
  mutations: {}
})
