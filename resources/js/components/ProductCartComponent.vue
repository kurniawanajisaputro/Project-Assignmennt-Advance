<!-- <template>
      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Price</th>
            </tr>
            </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.stock }}</td>
            <td>Rp. {{ product.price }}</td>
            <td> 
            <button-component v-if="product.stock > 0" text="add to cart" @emitClick="addToCart(product)"></button-component>
            <button-component v-else text="maaf stock habis" color="grey"></button-component>
            </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props: {
        products:{

        }
    },
    data () {
        return {
            cart:[]
    }
    },
  methods: {
    addToCart(product) {
      const item = this.cart.find(item => item.product.name === product.name);
      if (item) {
        item.quantity++;
        product.stock--;
      } else {
        this.cart.push({ product, quantity: 1 });
        product.stock--;
      }

      this.$emit('updateCart', this.cart)
    }
    }
  }
</script> -->