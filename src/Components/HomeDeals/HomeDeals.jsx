import {
  faArrowsRotate,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import cardPlaceHolder from "../../assets/review-author.png";
import ProductCard from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../Pages/services/getAllProducts";
import Loading from "../Loading/Loading";
import { calcCountdown } from "../../Pages/utils/calcCountdown";
import { ProductContext } from "../context/ProductContext/ProductContext";
export default function HomeDeals() {
  const { isLoading, products } = useContext(ProductContext);
  const [timeLeft, setTimeLeft] = useState({
    hour: "",
    minute: "",
    second: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calcCountdown();
      setTimeLeft(newTimeLeft);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const deals = products
    .filter((product) => product.priceAfterDiscount)
    .slice(0, 5);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-between items-center *:space-y-2">
            <div className="py-8">
              <h2 className="text-2xl font-bold">Deals of the day</h2>
              <div className="flex *:justify-center *:items-center gap-2 *:gap-1">
                <p className="flex text-md text-gray-600">Offers ends in</p>
                <div className="counter flex">
                  <div className="size-8 bg-black text-white text center rounded-md flex items-center justify-center">
                    {timeLeft.hour}
                  </div>
                  <span>:</span>
                  <div className="size-8 bg-black text-white text center rounded-md flex items-center justify-center">
                    {timeLeft.minute}
                  </div>
                  <span>:</span>
                  <div className="size-8 bg-black text-white text center rounded-md flex items-center justify-center">
                    {timeLeft.second}
                  </div>
                </div>
              </div>
            </div>
            <Link className="text-btn-dark " to={"/deals"}>
              View all deals
            </Link>
          </div>
          <div className="grid pb-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {deals.map((product) => (
              <ProductCard key={product.id} productInfo={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
