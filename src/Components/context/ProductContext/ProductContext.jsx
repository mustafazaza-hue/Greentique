import { createContext, useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import { getAllProducts } from "../../../Pages/services/getAllProducts";

export const ProductContext = createContext(null);

export default function ProductProvider({ children }) {
  const [products, setProduct] = useState([]);
  const [isLoading, setiIsloading] = useState(true);

  async function fetchProducts() {
    try {
      setiIsloading(true);
      const response = await getAllProducts();
      if (response.success) {
        setProduct(response.data.data);
        setiIsloading(false);
      }
    } catch (error) {
      setiIsloading(false);
      console.log(error);

      throw error;
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ProductContext.Provider value={{ isLoading, products }}>
      {children}
    </ProductContext.Provider>
  );
}
