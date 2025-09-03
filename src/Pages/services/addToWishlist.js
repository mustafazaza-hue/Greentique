import { apiClient } from "./apiClient"

export async function addToWishlist({id}){
    try {
        const options = {
            url :`/wishlist`,
            method : "POST",
            data : {
            productId : id
            }
        }
        const response = await apiClient.request(options)
        return response
    } catch (error) {
        throw error
    }
}