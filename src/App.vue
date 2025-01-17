<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'BookApp',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transition: all 0.3s ease;
}

body {
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
}

body.dark-theme {
  background-color: #1a1a1a;
  color: #ffffff;
}

.dark-theme #app {
  color: #ffffff;
}
</style> 