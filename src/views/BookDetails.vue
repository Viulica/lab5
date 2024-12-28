<template>
  <div v-if="book" class="book-details">
    <h2>{{ book.title }}</h2>
    <h3>By: {{ book.author }}</h3>
    <p>{{ book.description }}</p>
    <button @click="handleDelete" class="delete-btn">Delete Book</button>
  </div>
  <div v-else>
    <h2>Book not found</h2>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookStore } from '../stores/bookStore'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const bookStore = useBookStore()

    const book = computed(() => {
      return bookStore.books.find(b => b.id === parseInt(route.params.id))
    })

    const handleDelete = () => {
      bookStore.removeBook(parseInt(route.params.id))
      router.push('/')
    }

    return {
      book,
      handleDelete
    }
  }
}
</script>

<style scoped>
.book-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.delete-btn {
  background-color: #ff4444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #cc0000;
}
</style> 