import ProductPages from './components/ProductPageComponent.vue'
import CartPages from './components/CartPageComponent.vue'
import Example from './components/ExampleComponent.vue'

export const routes = [
    {
        path: "/",
        name: "example",
        component: Example
    },
    {
        path: "/product",
        name: "ProductPages",
        component: ProductPages
    },
    {
        path: "/cart",
        name: "CartPages",
        component: CartPages
    },
]