<template>
<div>
  <div v-if="user">
    <div class="header">
      <div>
        <h1>{{user.username}}</h1>
      </div>
      <div class="button">
        <p><button @click=" logout" class="pure-button pure-button-primary">Logout</button></p>
      </div>
    </div>

    <div v-for="entry in entries">
      <hr>
      <div class="entry">
        <p><i><b>{{entry.title}}</b></i></p>
        <p><i>{{entry.date}}</i></p>
        <div class="entryText">
          <p>{{entry.entry}}</p>
        </div>
        <br>
        <div class="delete">
          <button @click="deleteEntry(entry)" class="delete">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>If you would like to upload entries, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'mypage',

  data() {
    return {
      show: false,
      entries: [],
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },

  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getMyEntries");
    this.getEntries();
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    async getEntries() {
      try {
        let response = await axios.get("/api/entries/all");
        this.entries = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
