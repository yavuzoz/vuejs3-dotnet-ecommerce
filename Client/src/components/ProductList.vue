<template>
    <div>
        <h1>Products</h1>
        <div v-if="products.length === 0">Loading...</div>
        <div v-else>
            <div v-for="product in products" :key="product.id">
                <Product :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useProductStore } from '../store/productStore';
import Product from './Product.vue';

const productStore = useProductStore();

onMounted(async () => {
    await productStore.fetchProducts();
    console.log('Fetched products:', productStore.products); // API çağrısının sonucunu konsola loglayın
});

const products = computed(() => productStore.products);
console.log('Products in component:', products.value); // Bileşendeki ürünleri konsola loglayın
</script>