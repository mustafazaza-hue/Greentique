import { apiClient } from "./apiClient"

export async function getAllProducts({
    page,
    keyword,
    brand,
    category,
    priceGreaterThan,
    priceLessThan,
    sortedBy
} = {}
 ){
    try {
        const options={
          url:`/products?${page ? `page=${page}`:""}${keyword ? `&keyword=${keyword}`: ""}${brand ? `&brand=${brand}`: ""}${category ? `&category[in]=${category}`: ""}${priceGreaterThan ? `&price[gte]=${priceGreaterThan}`:""}${priceLessThan ? `&price[lte]=${priceLessThan}` : ""}${sortedBy ? `&sort=${sortedBy}` : ""}`,
          method:"GET"
        }
        const response = await apiClient.request(options)
        
        return response
        
    } catch (error) {
        console.log(error);
        throw error
        
    }
}