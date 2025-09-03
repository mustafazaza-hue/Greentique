import { apiClient } from "./apiClient"
export async function getProductById({id}){
    try {
        const options ={
            url:`products/${id}`,
            method : "GET"
        }

        const response = await apiClient.request(options)
        return response
        
    } catch (error) {
        throw error;
        
    }
}