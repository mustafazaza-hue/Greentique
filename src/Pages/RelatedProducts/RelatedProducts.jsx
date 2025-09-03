import React, { useEffect, useState } from "react";
import { apiClient } from "../services/apiClient";
import { getAllProducts } from "../services/getAllProducts";
import Loading from "../../Components/Loading/Loading";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "../../Components/ProductCard/ProductCard";
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

export default function RelatedProducts({ productdetail }) {
  const { category } = productdetail;
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  async function fetchRelatedProduct() {
    try {
        setIsLoading(true)
        const response = await getAllProducts({ category: category._id });
        if (response.success) {
            setRelatedProduct(response.data.data);
            setIsLoading(false)
        }
    } catch (error) {
        setIsLoading(false)
      console.log(error);

      throw error;
    }
  }

  useEffect(() => {
    fetchRelatedProduct();
  }, []);

  if (isLoading) {
    return <Loading />;
  }


  return <>
  <div className=" py-6">
    <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">You may also Like</h2>
        <div className="flex gap-2">
            <FontAwesomeIcon className="text-black! rounded-full size-6! p-2 bg-gray-200" icon={faArrowLeft} />
            <FontAwesomeIcon className="text-black! rounded-full size-6! p-2 bg-gray-200" icon={faArrowRight} />
        </div>
    </div>
    <div className=" py-6">
 <Swiper slidesPerView={5} loop={false} spaceBetween={10}>
 {relatedProduct.map((product)=> (
    <SwiperSlide key={product.id}>
        <ProductCard productInfo={product}/>
    </SwiperSlide>
))}</Swiper>

    </div>
  </div>
  
  </>
}
