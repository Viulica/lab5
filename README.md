URL: https://vue-s1h9.onrender.com

# pokreće se s: npm run serve

1. interpolation/one-way binding - Da, /src/components/BookList.vue, :4, :5
2. two-way binding - Da, /src/views/AddBook.vue, :7 (input)
3. methods - Da, /src/views/AddBook.vue, :54 (handleSubmit)
4. computed properties - Da, /src/views/BookDetails.vue, :24 (book computed)
5. scoped style - Da, /src/components/BookList.vue, :33
6. lifecycle hook - Da, /src/views/HomePage.vue, :24 (onMounted)
7. routing - Da, /src/router/index.js, :4-25
8. bookmarkable linkovi - Da, /src/router/index.js, :28 (createWebHistory)
9. dinamičko usmjeravanje s 404 - Da, /src/router/index.js, :22-26
10. dvije komponente - Da, /src/components/BookList.vue i /src/components/NavBar.vue
11. komponenta bez stanja, properties - Da, /src/components/BookList.vue, :22-27 (props)
12. komponenta sa stanjem - Da, /src/components/NavBar.vue, :21 (isDarkTheme ref koji upravlja temom)
13. emitiranje eventa - Da, /src/components/BookList.vue, :11 (@click="$emit('markReading', book.id)")
14. store (Pinia) - Da, /src/stores/bookStore.js, :3-42
15. asinkroni dohvat podataka - Da, /src/stores/bookStore.js, :8-17 (fetchBooks)