import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    entries: [],

  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setEntries(state, entries){
      state.entries = entries;
    },
  },
  actions: {
    async register(context, data) {
        try {
          let response = await axios.post("/api/users", data);
          context.commit('setUser', response.data);
          return "";
        } catch (error) {
          return error.response.data.message;
        }
      },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getMyEntries(context) {
      try {
        let response = await axios.get('/api/entries');
        context.commit('setEntries', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async getAllEntries(context) {
      try{
        let response = await axios.get("/api/entries/all");
        context.commit('setEntries', response.data);
        return "";
      } catch (error){
        return "";
      }
    }
  }
})