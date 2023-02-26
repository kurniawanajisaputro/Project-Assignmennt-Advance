const mutations = {
    ADD_TO_CART(state, product) {
        const item = state.cart.find(item => item.product.id === product.id);
        if (item) {
            item.quantity++;
            product.stock--;
        } else {
            state.cart.push({ product, quantity: 1 });
            product.stock--;
        }
        state.cartTotal += product.price;
    },
    REMOVE_FROM_CART(state, index) {
        const item = state.cart[index];
        const productToUpdate = state.products.find(product => product.id === item.product.id);
        productToUpdate.stock += item.quantity;
        state.cart.splice(index, 1);
        state.cartTotal -= item.product.price * item.quantity;
    },
    Increase_Qty(state, item) {
        item.quantity++;
        item.product.stock--;
      },
    Decrease_Qty(state, item){
          item.quantity--;
          item.product.stock++;
      }
      
}

export default mutations
