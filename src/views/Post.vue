<template>
<div class="about">
  <br>
  <form @submit="addEntry">
    <input v-model="addedDate" type="Date" placeholder="Date">
    <input v-model="addedTitle" placeholder="Title">
    <br><br>
    <textarea v-model="addedEntry" rows="15" cols="120"></textarea>
    <br><br>
    <button type="submit">Submit</button>
    <br><br>
  </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Post',
  data() {
    return {
      addedDate: '',
      addedTitle: '',
      addedEntry: '',
    }
  },
  methods: {
    async addEntry() {
      try {
        await axios.post("/api/entries", {
          date: this.addedDate,
          title: this.addedTitle,
          entry: this.addedEntry
        });
        this.addedName = "";
        this.addedDate = "";
        this.addedTitle = "";
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
