<template>
  <div>   
    <h1>Products</h1>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product-card">
        <Product :product="product" @add-to-cart="addToCart" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useProductStore } from '../store/productStore';
import { useCartStore } from '../store/cartStore';
import Product from '../components/Product.vue';

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(async () => {
  await productStore.fetchProducts();
});

const products = computed(() => productStore.products);

const addToCart = (product) => {
  cartStore.addToCart(product);
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.product-card {
  border: 1px solid #ccc;
  padding: 1rem;
  width: 200px;
}
</style>