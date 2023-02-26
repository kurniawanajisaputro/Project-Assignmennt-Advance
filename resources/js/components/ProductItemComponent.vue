<template>
    <tr>
      <td>{{ product.name }}</td>
      <td>{{ product.description }}</td>
      <td>{{ product.stock }}</td>
      <td>Rp. {{ product.price }}</td>
      <td>          
          <button-component v-if="product.stock > 0" text="Masuk Keranjang" @emitClick="addToCart(product)"/>
          <button-component v-else text="stock habis" color="grey"/>
      </td>
    </tr>
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