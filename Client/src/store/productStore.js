import { defineStore } from 'pinia';
import axios from 'axios';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: null
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get('http://localhost:5206/api/Products');
        this.products = response.data;
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },
    async fetchProduct(id) {
      try {
        const response = await axios.get(`http://localhost:5206/api/Products/${id}`);
        this.product = response.data;
      } catch (error) {
        console.error(`Failed to fetch product with id ${id}:`, error);
      }
    },
    async createProduct(product) {
      try {
        const response = await axios.post('http://localhost:5206/api/Products', product);
        this.products.push(response.data);
      } catch (error) {
        console.error('Failed to create product:', error);
      }
    },
    async updateProduct(product) {
      try {
        const response = await axios.put(`http://localhost:5206/api/Products/${product.id}`, product);
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
          this.products[index] = response.data;
        }
      } catch (error) {
        console.error('Failed to update product:', error);
      }
    },
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5206/api/Products/${id}`);
        this.products = this.products.filter(p => p.id !== id);
      } catch (error) {
        console.error(`Failed to delete product with id ${id}:`, error);
      }
    }
  }
});