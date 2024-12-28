<template>
  <div class="home">
    <h1>My Book Collection</h1>
    <BookList :books="bookStore.books" />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useBookStore } from '../stores/bookStore'
import BookList from '../components/BookList.vue'

export default {
  name: 'Home',
  components: {
    BookList
  },
  setup() {
    const bookStore = useBookStore()

    onMounted(async () => {
      await bookStore.fetchBooks()
    })

    return {
      bookStore
    }
  }
}
</script> 