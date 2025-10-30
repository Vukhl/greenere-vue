<template>
  <div id="app">
    <main>
      <router-view />
      <Products id="product-section"/>
      <Blog id="blog-section"/>
      <Gallery id="gallery-section" />
      <Mailing />
    </main>
  </div>
</template>

<script>

import Products from './components/Products.vue';
import Blog from './components/Blog.vue';
import Gallery from './components/Gallery.vue';
import Mailing from './components/Mailing.vue';
export default {
  name: 'App',
  components: {
    Products,
    Blog,
    Gallery,
    Mailing
  },
  
}
</script>

<style scoped>
.app {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #7f8c8d;
  font-size: 1.1rem;
}
</style>
