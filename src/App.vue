<template>
<div id="app">

  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Journaly</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <router-link to="/">
          <li class="nav-item active"><a class="nav-link text-white">Home</a></li>
        </router-link>
        <router-link to="/post">
          <li class="nav-item">
            <a class="nav-link text-white">Post</a>
          </li>
        </router-link>
        <router-link to="/mypage">
          <li class="nav-item">
            <a class="nav-link text-white">MyPage</a>
          </li>
        </router-link>
      </ul>
    </div>
    <!--<div class="navbar-collapse collapse w-100 order-3 dual-collapse2 text-white">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="user">Welcome {{user.username}} <br><a class="text-white" href="#" @click="logout">Logout</a></li>
      </ul>
    </div>-->
  </nav>
  <router-view />
  <br><br><br><br>
  <footer class="page-footer font-small blue pt-4 navbar-dark bg-primary foot">
    <div class="footer-copyright text-center py-3 text-white">TAs:
      <a href="https://github.com/Luke0509/creative5" class="text-white">Github</a>
    </div>
  </footer>

</div>
</template>

<script>
/*
import axios from 'axios';
export default {
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        let response = await axios.get("/api/users");
        this.user = response.data;
      } catch (error) {
        // Not logged in. That's OK!
      }
    }
  }
}*/
</script>

<style>
.foot {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
