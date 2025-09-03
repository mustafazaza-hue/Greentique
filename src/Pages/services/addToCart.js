import { data } from "react-router";
import { apiClient } from "./apiClient";

export async function addProductToCart({id}){
try {
        const options = {
        url:"/cart",
        method : "POST",
        data:{
            productId: id
        },
    }
    const response = await apiClient.request(options)
    return response
} catch (error) {
    throw error
}
}