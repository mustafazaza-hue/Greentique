import React, { lazy, useContext, useEffect, useState } from "react";
import productMainPlacehloder from "../../assets/61yYbVdshNL._SS400_.jpg";
import productSecondaryPlaceholder1 from "../../assets/canon-camera.jpg";
import productSecondaryPlaceholder2 from "../../assets/iphone.jpg";
import productSecondaryPlaceholder3 from "../../assets/lenovo-ideapad-3.jpg";
import productSecondaryPlaceholder4 from "../../assets/iphone.jpg";
import {
  faArrowRotateLeft,
  faCartShopping,
  faMinus,
  faPlus,
  faShareNodes,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink, useParams } from "react-router";
import { getProductById } from "../services/getProductById";
import Loading from "../../Components/Loading/Loading";
import Rating from "../../Components/Rating/Rating";
import { calcDiscount } from "../utils/calcDiscount";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { CartContext } from "../../Components/context/CartContext/Cart.context";

export default function ProductDetails() {
  const [productdetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { fecthAddToCart} = useContext(CartContext)

  const { id } = useParams();

  async function fetchGetProduct() {
    try {
      setIsLoading(true);
      const response = await getProductById({ id });
      if (response.success) {
        setProductDetail(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  }

  useEffect(() => {
    fetchGetProduct();
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }
  
  const {
    priceAfterDiscount,
    category,
    description,
    imageCover,
    images,
    price,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    title,
  } = productdetail;

  const handleClick = (e) => {
    document
      .querySelectorAll(".tab-item")
      .forEach((li) => li.classList.remove("active-tab"));
    e.currentTarget.classList.add("active-tab");
  };

  const tabs = [
    "Product Details",
    "Facts",
    "Reviews (149)",
    "Shipping & Returns",
  ];
  return (
    <>
      <section className="py-8 bg-gray-100">
        <div className="container">
          <div className="productdetails grid sm:grid-cols-1 space-x-3 lg:grid-cols-5">
            <div className="col-span-2 lg:max-w-5/6 lg:h-4/6">
              <ReactImageGallery
              showFullscreenButton={false}
              lazyLoad={true}
              showNav={false}
              showPlayButton={false}
              autoPlay={true}

                items={images.map((image) => {
                  return {
                    original: image,
                    thumbnail: image,
                  };
                })}
              />
            </div>
            <div className="productInfo lg:w-full lg:max-h-9/12 space-y-4 sm:mx-auto bg-white p-5 rounded-lg lg:col-span-3">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-200 text-sm p-1 rounded-lg">
                  {quantity > 0 ? "in stock" : "out of stock"}
                </span>
                <button className="icons flex gap-2">
                  <FontAwesomeIcon icon={faShareNodes} />
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="title text-lg font-bold">
                <h2>{title}</h2>
              </div>
              <div className="rating flex gap-1">
                <div className="stars">
                  <Rating rate={ratingsAverage} />
                </div>
                <span>{ratingsAverage}</span>
                <span>({ratingsQuantity}) review</span>
              </div>
              <div className="price flex items-center gap-3">
                <h3 className="text-3xl font-bold">
                  ${priceAfterDiscount || price}
                </h3>
                {priceAfterDiscount ? (
                  <>
                    <del className="text-sm text-gray-500">${price}</del>
                    <span className="bg-red-200 text-red-600 text-sm p-1 rounded-lg">
                      save {calcDiscount({ price, priceAfterDiscount })}%
                    </span>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="description py-4  border-t-1 border-gray-100">
                <p className="text-md text-gray-600 ">{description}</p>
              </div>
              <div className="quantity text-gray-500">
                <span>Quantity:</span>
                <button className="mx-4 border border-gray-300 py-2 px-2 rounded-lg space-x-4">
                  <FontAwesomeIcon icon={faMinus} />
                  <span>1</span>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <span>Only {quantity} items left in stock</span>
              </div>
              <div className="shoppingBtns flex gap-2 pb-2">
                <button onClick={()=>{
                  fecthAddToCart({id}) 
                }} className="btn w-full flex justify-center items-center gap-1">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <span>Add to Cart</span>
                </button>
                <button className="btn w-full bg-transparent text-gray-500 border border-gray-300 hover:bg-gray-200 transition-all duration-150">
                  Buy Now
                </button>
              </div>
              <div className="footer py-3 border-t border-gray-100">
                <ul className="flex items-center ">
                  <li className="w-full">
                    <div className="icon size-12 rounded-full bg-emerald-500/60 flex items-center justify-center">
                      <FontAwesomeIcon
                        className="text-emerald-800"
                        icon={faTruckFast}
                      />
                    </div>
                    <div className="content">
                      <h4 className="font-semibold">Free Delivery</h4>
                      <p className="text-gray-500">Orders $50 or more</p>
                    </div>
                  </li>
                  <li className="w-full">
                    <div className="icon size-12 rounded-full bg-emerald-500/60 flex items-center justify-center">
                      <FontAwesomeIcon icon={faArrowRotateLeft} />
                    </div>
                    <div className="content">
                      <h4 className="font-semibold">30 Day Return</h4>
                      <p className="text-gray-500">Satisfaction guaranteed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aboutProduct bg-white my-8 p-4">
            <div className="heading border-b border-gray-200 pb-2 ">
              <ul className="flex items-center gap-9">
                {tabs.map((tab, i) => (
                  <li
                    key={i}
                    onClick={handleClick}
                    className="tab-item text-md text-gray-600 p-2 relative cursor-pointer"
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="py-8 text-xl font-bold">Product Description</h2>
            <p className="text-md text-gray-500">
              Our organic strawberries are carefully grown without synthetic
              pesticides or fertilizers, ensuring you get the purest, most
              natural flavor in every bite. These vibrant red berries are
              handpicked at peak ripeness to guarantee maximum sweetness and
              nutritional value.
            </p>
            <div className="flex items-center">
              <div className="orl py-8 w-1/2">
                <h3 className="mb-3 font-semibold text-md">benefits</h3>
                <ol className="list-disc list-inside">
                  <li>Rich in vitamins C and K</li>
                  <li>Good source Of fiber and antioxidants</li>
                  <li>Supports heart health</li>
                  <li>Helps regulate blood sugar</li>
                  <li>Promotes health skin</li>
                </ol>
              </div>
              <div className="rul py-8 w-1/2">
                <h3 className="mb-3 font-semibold text-md">Product Details</h3>
                <div className="">
                  <div>
                    <span className="pr-10 pb-4">Origin:</span>
                    <span>California, USA</span>
                  </div>
                  <div>
                    <span className="pr-10 pb-4">Cultivation:</span>
                    <span>Organic</span>
                  </div>
                  <div>
                    <span className="pr-10 pb-4">Storage:</span>
                    <span>Refrigerate upon arrival</span>
                  </div>
                  <div>
                    <span className="pr-10 pb-4">Shelf Life:</span>
                    <span>5-7 days when refrigerated</span>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl py-2 font-bold">How to store</h3>
            <p className="text-md py-2 text-gray-500">
              For optimal freshness, refrigerate strawberries unwashed in their
              original container or in a paper towel-lined container. Wash just
              before eating. To extend shelf life, remove any damaged berries as
              soon as possible.
            </p>
          </div>
          <RelatedProducts productdetail={productdetail}/>
        </div>
      </section>
    </>
  );
}
