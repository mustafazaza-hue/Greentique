import Rating from "../Rating/Rating";
import cartPlaceholder from "../../assets/iphone.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext/Cart.context";

export default function CartItem({ productInfo }) {
  console.log(productInfo);
  const { count, price, product } = productInfo;
  const { handleRemove } = useContext(CartContext);
  const { category, id, imageCover, quantity, ratingAverage, title } = product;
  const { handleUpdate } = useContext(CartContext);

  return (
    <>
      <div className="flex items-center justify-between py-3">
        <div className="products-cart flex items-center gap-2 max-h-fit">
          <div className="img">
            <img
              className="w-24 object-cover"
              src={product.imageCover}
              alt=""
            />
          </div>
          <div className="cart-content">
            <div className="title">
              <h2 className="text-lg font-semibold">
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </h2>
            </div>
            <div className="category">
              <span className="text-sm text-gray-500">
                {product.category?.name}
              </span>
            </div>
            <div className="rating">
              <Rating rate={product.ratingsAverage} />
            </div>
          </div>
        </div>
        <div className="product-details flex items-center justify-end gap-3">
          <button className="cursor-text flex items-center gap-3 border-2 border-gray-100 rounded-lg ">
            <FontAwesomeIcon
              className="border-r-2 p-2 border-gray-100 cursor-pointer"
              icon={faMinus}
              onClick={() => {
                handleUpdate({ id, count: count - 1 });
              }}
            />
            <span className="quantity">{count}</span>
            <FontAwesomeIcon
              className="border-l-2 p-2 border-gray-100 cursor-pointer"
              icon={faPlus}
              onClick={() => {
                handleUpdate({ id, count: count + 1 });
              }}
            />
          </button>
          <div className="pricing flex flex-col items-center gap-1">
            {product.priceAfterDiscount ? (
              <>
                {" "}
                <span className="price font-bold">${price}</span>
                <del className="priceAfterDiscount text-sm text-gray-500 ">
                  ${product.priceAfterDiscount}
                </del>
              </>
            ) : (
              <span className="price font-bold">${price}</span>
            )}
            {/* <span className="price font-bold">${price}</span>
                    <del className="priceAfterDiscount text-sm text-gray-500 ">
                      $000
                    </del> */}
          </div>
          <div
            onClick={() => {
              handleRemove({ id });
            }}
            className="removeIcon"
          >
            <FontAwesomeIcon
              className="text-red-500 cursor-pointer"
              icon={faTrash}
            />
          </div>
        </div>
      </div>
    </>
  );
}
