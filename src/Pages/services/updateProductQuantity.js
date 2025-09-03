import { apiClient } from "./apiClient"

export async function updateProductQuantity({id , count}){
try {
        const options = {
        url : `/cart/${id}`,
        method : "PUT",
        data : {
            count
        }
    }
    const response = await apiClient.request(options)
    return response
} catch (error) {
    throw error
}
}