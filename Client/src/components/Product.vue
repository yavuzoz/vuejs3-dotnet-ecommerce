<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
    </div>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
});
</script>