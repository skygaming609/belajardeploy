<template>
  <div>
    <Header />
    <main>
      <div v-if="product">
        <h1>{{ product.name }}</h1>
        <img :src="product.image" alt="Product Image" />
        <p>Price: \${{ product.price.toFixed(2) }}</p>
        <p>Description: {{ product.description }}</p>
      </div>
      <router-link to="/">Back to Home</router-link>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'ProductDetail',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      product: null
    }
  },
  mounted() {
    // Simulate fetching product details
    const productId = this.$route.params.id;
    this.product = {
      id: productId,
      name: `Product ${productId}`,
      price: 29.99,
      image: 'https://via.placeholder.com/300',
      description: 'This is a detailed description of the product.'
    }
  }
}
</script>
