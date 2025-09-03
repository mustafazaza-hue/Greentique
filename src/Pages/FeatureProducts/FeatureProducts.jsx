import { useContext, useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { getAllProducts } from "../services/getAllProducts";
import Loading from "../../Components/Loading/Loading";
import { ProductContext } from "../../Components/context/ProductContext/ProductContext";

export default function FeatureProducts() {
  const { products, isLoading } = useContext(ProductContext);

  useEffect(() => {}, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="heading">
            <h2 className="font-bold text-2xl py-6">Feature Prodcuts</h2>
          </div>
          <div className="grid pb-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
