import axios from "axios";

const addToCart = ({commit},product) => {
    commit('ADD_TO_CART',product)
    }
const removeFromCart = ({commit},index) => {
        commit('REMOVE_FROM_CART',index)
    }
const increaseQty = ({commit}, item) => {
        commit('Increase_Qty',item)
    }
const decreaseQty = ({commit}, item) => {
        commit('Decrease_Qty',item)
        }
        const getAllData = async (context) => {
            let response = await axios.get("api/getAllData");
        
            return response
        }
        
        const postData = async (context, payload) => {
            let response = await axios.post("api/postData", payload);
        
            return response
        }
        
        const putData = async (context, payload) => {
            let response = await axios.put("api/putData", payload);
        
            return response
        }
        
        const patchData = async (context, payload) => {
            let response = await axios.patch("api/patchData", payload);
        
            return response
        }
        
        const deleteData = async (context, payload) => {
            let response = await axios.delete("api/deleteData/" + payload.id);
        
            return response
        }
        // const productPage = async (context, payload) => {
        //     let response = await axios.delete("api/productPage/" + payload.id);
        
        //     return response
        // }
        // const cartPage = async (context, payload) => {
        //     let response = await axios.delete("api/cartPage/" + payload.id);
        
        //     return response
        // }
export default{
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    getAllData,
    postData,
    putData,
    patchData,
    deleteData,
    // productPage,
    // cartPage
}