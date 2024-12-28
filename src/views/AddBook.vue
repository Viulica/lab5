<template>
  <div class="add-book">
    <h2>Add New Book</h2>
    <form @submit.prevent="handleSubmit" class="book-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input 
          id="title"
          v-model="bookData.title" 
          required
          type="text"
        >
      </div>

      <div class="form-group">
        <label for="author">Author:</label>
        <input 
          id="author"
          v-model="bookData.author" 
          required
          type="text"
        >
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea 
          id="description"
          v-model="bookData.description" 
          required
        ></textarea>
      </div>

      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useBookStore } from '../stores/bookStore'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const bookStore = useBookStore()
    const router = useRouter()
    const bookData = ref({
      title: '',
      author: '',
      description: ''
    })

    const handleSubmit = () => {
      bookStore.addBook(bookData.value)
      router.push('/')
    }

    return {
      bookData,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.add-book {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.book-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input, textarea {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style> 