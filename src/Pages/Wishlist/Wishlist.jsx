// Wishlist.jsx
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { CartContext } from "../../Components/context/CartContext/Cart.context";
import Loading from "../../Components/Loading/Loading";
import  WishlistContext  from "../../Components/context/WishListContext/Wishlist.context";
import Rating from "../../Components/Rating/Rating";

export default function Wishlist({productInfo}) {
  const { wishlist, isLoading, fetchWishlist, handleRemove } = useContext(WishlistContext)
console.log(wishlist);

if(isLoading){
  return <Loading/>
}
  



  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Main Content */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-4 md:p-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <h2 className="text-lg md:text-xl font-semibold">My Wishlist</h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500">
                <FontAwesomeIcon icon={faTrashAlt} /> Clear All
              </button>
              <button className="bg-btn-dark text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700">
                Add All to Cart
              </button>
            </div>
          </div>

          {/* Items Count */}
          <p className="text-gray-500 text-sm mb-4">{wishlist.length} items in your wishlist</p>

          {/* Wishlist Item */}

{wishlist.map((product)=>(            <div key={product._id} className="flex flex-col sm:flex-row sm:items-center justify-between border-y-2 border-gray-100 rounded-xl p-4 mb-3 gap-4">
            {/* Left Part */}
            <div className="flex items-center gap-4">
              <img
                src={product.imageCover}
                alt="Product"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <p className="text-xs text-gray-400">{product.category.name}</p>
                <h3 className="font-semibold text-sm md:text-base">
                  {product.title}
                </h3>
                <div className="flex items-center text-yellow-400 text-xs md:text-sm">
<Rating rate={product.ratingsAverage}/>
                  <span className="text-gray-500 ml-1">{(product.ratingsQuantity)}</span>
                </div>
                <p className="text-btn-dark font-bold">${product.price}</p>
              </div>
            </div>

            {/* Right Part */}
            <div  className="flex items-center gap-3">
              <button className="bg-btn-dark text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700">
                Add to Cart
              </button>
              <FontAwesomeIcon
              onClick={()=>{
              handleRemove({ id: product._id })
            }}
                icon={faTrashAlt}
                className="text-gray-400 hover:text-red-500 cursor-pointer"
              />
            </div>
          </div>))}

          {/* Pagination */}
          <div className="flex justify-center  mt-6 gap-2">
            <button className="px-3 py-1 border rounded-md">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="px-3 py-1 bg-btn-dark text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border rounded-md">2</button>
            <button className="px-3 py-1 border rounded-md">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Create Wishlist */}
          <div className="bg-white shadow rounded-2xl p-5">
            <h3 className="font-semibold mb-3">Create New Wishlist</h3>
            <input
              type="text"
              placeholder="e.g., Holiday Shopping"
              className="w-full border rounded-lg px-3 py-2 text-sm mb-3"
            />
            <div className="flex items-center gap-4 mb-3 text-sm">
              <label className="flex items-center gap-1">
                <input type="radio" name="privacy" /> Public
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="privacy" /> Private
              </label>
            </div>
            <button className="w-full bg-btn-dark text-white rounded-lg py-2 text-sm hover:bg-green-700">
              Create Wishlist
            </button>
          </div>

          {/* My Wishlists */}
          <div className="bg-white shadow rounded-2xl p-5">
            <h3 className="font-semibold mb-3">My Wishlists</h3>
            <div className="flex justify-between text-sm mb-2">
              <span>Default Wishlist</span>
              <span className="text-btn-dark cursor-pointer">View</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Birthday Ideas</span>
              <span className="text-btn-dark cursor-pointer">View</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Weekly Groceries</span>
              <span className="text-btn-dark cursor-pointer">View</span>
            </div>
          </div>

          {/* Share */}
          <div className="bg-white shadow rounded-2xl p-5">
            <h3 className="font-semibold mb-3">Share Your Wishlist</h3>
            <div className="flex gap-2 mb-3 flex-wrap">
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </button>
              <button className="bg-sky-500 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </button>
            </div>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <input
                type="text"
                value="https://freshcart.com/wishlist/123"
                readOnly
                className="flex-1 px-2 py-1 text-xs text-gray-500"
              />
              <button className="px-3 py-1 bg-gray-100 text-sm">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
