<template>
  <nav :class="{ 'dark': isDarkTheme }">
    <div class="nav-links">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add Book</router-link>
    </div>
    
    <div class="user-menu">
      <button @click="toggleTheme" class="theme-button">
        {{ isDarkTheme ? '☀️ Light' : '🌙 Dark' }} Theme
      </button>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, watch } from 'vue'

export default {
  setup() {
    const isDarkTheme = ref(localStorage.getItem('darkTheme') === 'true')

    onMounted(() => {
      applyTheme(isDarkTheme.value)
    })

    watch(isDarkTheme, (newValue) => {
      applyTheme(newValue)
      localStorage.setItem('darkTheme', newValue)
    })

    const applyTheme = (isDark) => {
      document.body.classList.toggle('dark-theme', isDark)
    }

    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value
    }

    return {
      isDarkTheme,
      toggleTheme
    }
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.nav-links a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s ease;
}

.nav-links a.router-link-exact-active {
  color: #42b983;
}

.theme-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-button:hover {
  background-color: #3aa876;
}

/* Dark theme styles */
nav.dark {
  background-color: #1a1a1a;
}

nav.dark .nav-links a {
  color: #ffffff;
}

nav.dark .nav-links a.router-link-exact-active {
  color: #42b983;
}
</style> 