<template>
  <div>
    <Header />
    <main>
      <h1>Product List</h1>
      <div class="product-list">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    ProductCard
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/150' }
      ]
    }
  }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
