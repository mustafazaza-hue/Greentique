import { apiClient } from "./apiClient";

export async function verifyToken(){
    try {
    const options={
        method:"GET",
        url:"/auth/verifyToken"
    }

        const response = await apiClient.request(options)
        return response
    } catch (error) {
        throw error;
        
    }
}