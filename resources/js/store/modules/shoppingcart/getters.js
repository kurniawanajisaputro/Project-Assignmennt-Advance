const getters = {
    getProducts: state => state.products,
        getCart: state => state.cart,
        cartTotal: state => {
            return state.cart.reduce((total, item) => {
                return total + (item.quantity * item.product.price);
            }, 0);},
}

export default getters
