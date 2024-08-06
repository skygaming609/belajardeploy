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
import { ref, onMounted } from 'vue';

export default {
  name: 'ProductDetail',
  components: {
    Header,
    Footer
  },
  setup(props) {
    const product = ref(null);

    onMounted(() => {
      // Simulate fetching product details
      const productId = props.$route.params.id;
      product.value = {
        id: productId,
        name: `Product ${productId}`,
        price: 29.99,
        image: 'https://via.placeholder.com/300',
        description: 'This is a detailed description of the product.'
      };
    });

    return { product };
  }
}
</script>
