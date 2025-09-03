import React, { useContext } from "react";
import cartPlaceholder from "../../assets/iphone.jpg";
import Rating from "../../Components/Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faShieldHalved,
  faTrash,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import CartItem from "../../Components/CartItem/CartItem";
import { CartContext } from "../../Components/context/CartContext/Cart.context";
import Loading from "../../Components/Loading/Loading";
import { Link } from "react-router";

export default function Cart() {
  const { cartInfo, isLoading } = useContext(CartContext);
  console.log(cartInfo);

  if (isLoading) {
    return <Loading />;
  }
  const { numOfCartItems, data } = cartInfo;
  const { totalCartPrice, products } = data;
  return (
    <>
      <section className="bg-gray-100 py-8">
        <div className="container grid grid-cols-6 gap-8 items-start">
          <div className="products col-span-4 bg-white p-4 rounded-md border-2 border-gray-200">
            <div className="heading border-b-2 border-gray-100 pb-4 space-y-3">
              <h2 className="text-2xl font-bold">Shopping Cart</h2>
              <p className="text-gray-500 text-md">
                {numOfCartItems} items in your cart{" "}
              </p>
            </div>
            {products.map((product) => (
              <CartItem key={product._id} productInfo={product} />
            ))}
          </div>
          <div className="order col-span-2 bg-white p-4 rounded-md border-2 border-gray-200">
            <div className="heading pb-6">
              <h3 className="font-bold text-lg">Order Summary</h3>
            </div>
            <div className="order-details space-y-4 border-b-2 border-gray-200 pb-6">
              <div className="flex items-center justify-between">
                <span className="text-md text-gray-500">
                  Subtotal ({numOfCartItems} items)
                </span>
                <span className="font-bold text-md">${totalCartPrice}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-md text-gray-500">shipping</span>
                <span className="font-bold text-md text-btn-dark">
                  ${products.length > 0 ? 70 : 0}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-md text-gray-500">Tax</span>
                <span className="font-bold text-md">
                  ${Math.trunc(totalCartPrice * 0.14)}
                </span>
              </div>
            </div>
            <div className="buy-details">
              <div className="total py-5 flex items-center justify-between">
                <h2 className="text-lg font-bold">Total</h2>
                <span className="text-md font-bold">
                  $
                  {Math.trunc(
                    totalCartPrice +
                      (products.length > 0 ? 70 : 0) +
                      totalCartPrice * 0.14
                  )}
                </span>
              </div>
              <div className="buttons space-y-3">
                <button className="btn bg-btn-dark text-white w-full">
                  <Link to={"/checkout"}>Proceed to Checkout</Link>
                </button>
                <button className="btn bg-transparent border-1 border-gray-200 text-black w-full">
                  Continue Shopping
                </button>
              </div>
            </div>
            <div className="pt-6 space-y-5">
              <div className="p-4 bg-gray-100/50 rounded-md flex flex-col py-5">
                <div className="flex items-center gap-3 pb-3">
                  <FontAwesomeIcon
                    className="text-btn-dark size-14"
                    icon={faTruckFast}
                  />
                  <span className="font-semibold text-md">Free Delivery</span>
                </div>
                <div>
                  <p className="text-md text-gray-500">
                    Your order qualifies for free delivery. Estimated delivery:
                    2-3 business days
                  </p>
                </div>
              </div>
              <div className="p-4 bg-btn-dark/20 border-2 border-btn-light rounded-md flex flex-col py-5">
                <div className="flex items-center gap-3 pb-3">
                  <FontAwesomeIcon
                    className="text-btn-dark size-14"
                    icon={faShieldHalved}
                  />
                  <span className="font-semibold text-md">Secure Checkout</span>
                </div>
                <div>
                  <p className="text-md text-gray-500">
                    Your order qualifies for free delivery. Estimated delivery:
                    2-3 business days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
