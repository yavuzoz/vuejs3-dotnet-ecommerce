<template>
    <div>
        <h1>Products</h1>
        <div v-for="product in products" :key="product.id">
            <Product :product="product" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Product from './Product.vue';

const products = ref([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100.00 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200.00 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300.00 },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 400.00 },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 500.00 }
]);
</script>