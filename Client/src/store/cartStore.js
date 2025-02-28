import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),
  getters: {
    total: (state) => {
      return state.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({ product, quantity: 1 });
      }
    },
    increaseQuantity(product) {
      const item = this.cartItems.find(item => item.product.id === product.id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity(product) {
      const item = this.cartItems.find(item => item.product.id === product.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartItems = this.cartItems.filter(item => item.product.id !== product.id);
      }
    }
  }
});