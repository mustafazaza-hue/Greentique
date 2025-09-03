import { apiClient } from "./apiClient"

export async function getAllBrands({keyword, limit}={}){
    try {
        const options={
            url:`/brands?${limit ? `limit=${limit}`:""}${keyword ? `&keyword=${keyword}`:""}`,
            method : "GET"
        }
        const response = await apiClient.request(options)
        return response
    } catch (error) {
        throw error
    }
}