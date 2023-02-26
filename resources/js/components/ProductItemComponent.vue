<template>
  <div class = "product-display">
    <div class = "product-container">
      <div class = "product-image">
        <img :src="product.imageUrl">
      </div>
      <div class = "product-info">
          <title-component :title="product.name"/>
          <p>{{ product.description}}</p>
          <p>Rp. {{ product.price }}</p>
          <p v-if="product.stock > 0">tersisa : {{ product.stock }}</p>
          <p v-else>Out of Stock</p>
          <button-component v-if="product.stock > 0" text="Masuk Keranjang" @emitClick="addToCart(product)"/>
          <button-component v-else text="stock habis" color="grey"/>
      </div>
  </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: {
      product:{
          required: true,
      }
    },
  methods: {
    ...mapActions(['addToCart'])
}
}
</script>