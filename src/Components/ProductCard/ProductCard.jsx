import {
  faArrowsRotate,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import cardPlaceHolder from "../../assets/review-author.png";
import { calcDiscount } from "../../Pages/utils/calcDiscount";
import Rating from "../Rating/Rating";
import { useContext } from "react";
import { CartContext } from "../context/CartContext/Cart.context";
import  WishlistContext  from "../context/WishListContext/Wishlist.context";

export default function ProductCard({ productInfo }) {
  const {
    _id,
    id,
    category,
    imageCover,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
    title,
  } = productInfo;

  const { fecthAddToCart } = useContext(CartContext);
  const {fetchWishlist} = useContext(WishlistContext)

  return (
    <>
      <div className="card bg-white cursor-pointer rounded-xl shadow-xl overflow-hidden relative">
        <div className="img ">
          <Link className="block" to={`/product/${id}`}>
            {" "}
            <img className="h-60 mx-auto" src={imageCover} alt="" />
          </Link>
        </div>
        <div className="content space-y-1 h-full bg-white py-3 px-4">
          <div>
            <span className="block category text-sm text-gray-600">
              {category.name}
            </span>
            <Link to={`/product/${id}`}>
              {" "}
              <h2 className="font-semibold">{title}</h2>
            </Link>
          </div>
          <div className="rating flex items-center gap-1 *:flex *:items-center">
            <div className="stars text-center ">
              <Rating rate={ratingsAverage} />
            </div>
            <span>{ratingsAverage}</span>
            <span className="text-sm text-gray-600">({ratingsQuantity})</span>
          </div>
          <div className="price flex items-center justify-between">
            <div className="space-x-2">
              {priceAfterDiscount ? (
                <>
                  {" "}
                  <span className="font-bold text-xl">
                    ${priceAfterDiscount}
                  </span>
                  <del className="text-sm text-gray-500">${price}</del>{" "}
                </>
              ) : (
                <span className=" font-bold text-xl">${price}</span>
              )}
              {/* <span className=" font-bold text-xl">${price}</span>
              {priceAfterDiscount && <del className="text-sm text-gray-500">${priceAfterDiscount}</del>} */}
            </div>
            <button
              onClick={() => {
                fecthAddToCart({ id });
              }}
              className="btn p-0 size-10 rounded-full flex items-center justify-center "
            >
              <FontAwesomeIcon
                className="text-white text-center"
                icon={faPlus}
              />
            </button>
          </div>
        </div>
        <div className="nav-btns flex items-center flex-col gap-3 absolute top-4 right-2 *:hover:text-btn-dark *:transition-colors *:duration-150">
          <button onClick={()=>{
            fetchWishlist({id})
          }} className="size-7 bg-white text-black rounded-full">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className="size-7 bg-white text-black rounded-full">
            <FontAwesomeIcon icon={faArrowsRotate} />
          </button>
          <button className="size-7 bg-white text-black rounded-full">
            <Link to={`/product/${id}`}>
              {" "}
              <FontAwesomeIcon icon={faEye} />
            </Link>
          </button>
        </div>
        {priceAfterDiscount && (
          <span className="sale absolute top-4 left-2 text-white bg-red-500 w-fit py-0.5 px-1.5 rounded-md">
            {calcDiscount({ price, priceAfterDiscount })}%
          </span>
        )}
      </div>
    </>
  );
}
