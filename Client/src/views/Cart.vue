<template>
    <div>     
      <h1>Cart</h1>
      <div v-if="cartItems.length === 0">Your cart is empty.</div>
      <div v-else>
        <div v-for="item in cartItems" :key="item.product.id" class="cart-item">
          <h2>{{ item.product.name }}</h2>
          <p>Price: {{ item.product.price }}</p>
          <p>Quantity: 
            <button @click="decreaseQuantity(item.product)">-</button>
            {{ item.quantity }}
            <button @click="increaseQuantity(item.product)">+</button>
          </p>
        </div>
        <h2>Total: {{ total }}</h2>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useCartStore } from '../store/cartStore';
  
  const cartStore = useCartStore();
  
  const cartItems = computed(() => cartStore.cartItems);
  const total = computed(() => cartStore.total);
  
  const increaseQuantity = (product) => {
    cartStore.increaseQuantity(product);
  };
  
  const decreaseQuantity = (product) => {
    cartStore.decreaseQuantity(product);
  };
  </script>
  
  <style scoped>
  .cart-item {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  </style>