import axios from "axios";

const addToCart = async (context, product) => {
    context.commit('ADD_TO_CART',product)
    await axios.post('api/postData');
    }
const removeFromCart = async (context, index) => {
    context.commit('REMOVE_FROM_CART',index)
        await axios.delete('api/deleteData', { data: index });
    }
const increaseQty = async (context, item) => {
    context.commit('Increase_Qty',item)
        await axios.patch('api/patchData', item);
    }
const decreaseQty = async (context, item) => {
    context.commit('Decrease_Qty',item)
        await axios.patch('api/patchData', item);
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
}