import { Children, createContext, useEffect, useState } from "react";
import { apiClient } from "../../Pages/services/apiClient";
import Loading from "../Loading/Loading";

export const CategoriesContext = createContext(null)

export default function CategoriesProvider({children}){ 
      const [categories, setCategories] = useState(null);
      const [isLoading, setIsLoading] = useState(true);
    
      async function getCategories() {
        try {
          const options = {
            url: `/categories`,
            method: "Get",
          };
          const response = await apiClient.request(options);
          return response;
        } catch (error) {
          throw error;
        }
      }
    
      async function fetchCategories() {
        try {
          setIsLoading(true);
          const response = await getCategories();
    
          if (response.success) {
            setCategories(response.data.data);
            setIsLoading(false);
          }
        } catch (error) {
          setIsLoading(false);
          console.log(error);
        }
      }
      useEffect(() => {
        fetchCategories();
      }, []);
    

      return (
      <CategoriesContext.Provider value={{isLoading, categories}}>
        {children}
      </CategoriesContext.Provider>
      )
}