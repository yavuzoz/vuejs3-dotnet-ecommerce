<template>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  nav {
    display: flex;
    gap: 1rem;
  }
  a {
    color: white;
    text-decoration: none;
  }
  </style>