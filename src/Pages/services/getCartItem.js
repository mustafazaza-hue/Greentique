import { apiClient } from "./apiClient";

export async function getCartItem (){
try {
        const options = {
        url: "/cart",
        method : "GET",
    }
    const response = await apiClient.request(options)
    return response
} catch (error) {
    throw error;
    
}
}