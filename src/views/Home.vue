<template>
  <main>
    <Header />
    <Brands />  
  </main>
</template>

<script>
import Header from '../components/Header.vue'
import Brands from '../components/Brands.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Brands
  }
}
</script>