import Vue from 'vue'
import Vuex from 'vuex'
import shoppingcart from './modules/shoppingcart';

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        shoppingcart: shoppingcart
    }
});

export default store;

