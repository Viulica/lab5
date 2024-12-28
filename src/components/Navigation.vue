<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add">Add Book</router-link>
  </nav>
</template>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> 