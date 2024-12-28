import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: JSON.parse(localStorage.getItem('books') || '[]')
  }),
  actions: {
    async fetchBooks() {
      if (this.books.length === 0) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.books = [
          { id: 1, title: '1984', author: 'George Orwell', description: 'A dystopian novel' },
          { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'Classic novel' }
        ]
        localStorage.setItem('books', JSON.stringify(this.books))
      }
    },
    addBook(book) {
      const newBook = { 
        ...book, 
        id: Math.max(0, ...this.books.map(b => b.id)) + 1 
      }
      this.books.push(newBook)
      localStorage.setItem('books', JSON.stringify(this.books))
    },
    removeBook(id) {
      this.books = this.books.filter(book => book.id !== id)
    },
    toggleReading(bookId) {
      const book = this.books.find(b => b.id === bookId)
      if (book) {
        book.isReading = !book.isReading
        localStorage.setItem('books', JSON.stringify(this.books))
      }
    }
  }
}) 