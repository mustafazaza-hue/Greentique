import { apiClient } from "./apiClient"

export async function deleteItemFromCart ({id}){
    try {
        const options = {
            url :`/cart/${id}`,
            method :"DELETE"
        }
        const response = await apiClient.request(options)
        return response
    } catch (error) {
        throw error
    }
}