<template>
  <div class="book-list">
    <div v-for="book in books" :key="book.id" class="book-item">
      <h3>{{ book.title }}</h3>
      <p>By: {{ book.author }}</p>
      <div class="button-group">
        <router-link :to="{ name: 'BookDetails', params: { id: book.id }}" class="view-btn">
          View Details
        </router-link>
        <button 
          @click="$emit('markReading', book.id)" 
          class="reading-btn"
          :class="{ 'is-reading': book.isReading }"
        >
          {{ book.isReading ? 'Currently Reading' : 'Mark as Reading' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.book-item {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.view-btn {
  text-decoration: none;
  color: #2c3e50;
  padding: 5px 10px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.view-btn:hover {
  background-color: #2c3e50;
  color: white;
}

.reading-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reading-btn:hover {
  background-color: #3aa876;
}

.reading-btn.is-reading {
  background-color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
</style> 