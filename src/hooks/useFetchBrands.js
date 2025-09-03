import { useEffect, useState } from "react";
import { getAllBrands } from "../Pages/services/getAllBrands";

export function useFetchBrands() {
  const [brand, setBrand] = useState([]); // Always an array
  const [metadata, setMetadata] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 12;
  const keyword = "";

  useEffect(() => {
    async function fetchBrands() {
      setIsLoading(true);
      try {
        const response = await getAllBrands({ limit, page, keyword });
        if (response.success) {
          setBrand(response.data.data);
          setMetadata(response.data.metadata);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBrands();
  }, [page]); // Only depend on page

  const nextPage = () => {
    if (metadata?.nextPage) {
      setPage(metadata.nextPage);
    }
  };
  const previousPage = () => {
    if (metadata?.currentPage > 1) {
      setPage(metadata.currentPage - 1);
    }
  };

  const hasNext = !!metadata?.nextPage;
  const hasPrevious = metadata?.currentPage > 1;

  return { isLoading, brand, page, setPage, nextPage, previousPage, metadata, hasNext, hasPrevious };
}