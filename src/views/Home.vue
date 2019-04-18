<template>
<div class="home">
  <div class="content">

    <br>
    <h3>Entries</h3>
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
  <br>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'home',
  data() {
    return {
      entries: []
    }
  },
  created() {
    this.getEntries();
  },
  methods: {
    async getEntries() {
      try {
        let response = await axios.get("/api/entries/all");
        this.entries = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEntry(entry) {
      try {
        await axios.delete("/api/entries/" + entry._id);
        this.getEntries();
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>
