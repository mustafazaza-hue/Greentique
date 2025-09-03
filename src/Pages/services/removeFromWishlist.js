import { apiClient } from "./apiClient"

export async function removeFromWishlist({id}){
 try {
    const options = {
    url:`/wishlist/${id}`,
    method : "DELETE",
    }
    const response = await apiClient.request(options)
    return response
 } catch (error) {
    throw error
 }
}