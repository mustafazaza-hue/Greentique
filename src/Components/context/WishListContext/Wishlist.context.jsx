import { createContext, useContext, useEffect, useState } from "react";
import { addToWishlist } from "../../../Pages/services/addToWishlist";
import { getProductById } from "../../../Pages/services/getProductById";
import { toast } from "react-toastify";
import { removeFromWishlist } from "../../../Pages/services/removeFromWishlist";
import Swal from "sweetalert2";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [wishlist, setWishlist] = useState(() => {
    // اول ما يفتح التطبيق حاول تقرا من localStorage
    const cached = localStorage.getItem("wishlist");
    return cached ? JSON.parse(cached) : [];
  });

  // كل ما ال wishlist تتغير، خزنها في localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  async function fetchWishlist({ id }) {
    try {
      setIsLoading(true);

      const response = await addToWishlist({ id });
      if (response.success) {
        toast.success("Product Added To Wishlist Successfully !");

        const wishlistIds = response.data.data;

        // رجع تفاصيل المنتجات كلها
        const productDetails = await Promise.all(
          wishlistIds.map((id) =>
            getProductById({ id }).then((res) => res.data.data)
          )
        );

        setWishlist(productDetails);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

async function handleRemove({ id }) {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const response = await removeFromWishlist({ id });

      if (response.success) {
        // الـ API بيرجع array من IDs بعد الحذف
        const wishlistIds = response.data.data;

        // هات تفاصيل المنتجات كلها
        const productDetails = await Promise.all(
          wishlistIds.map((id) =>
            getProductById({ id }).then((res) => res.data.data)
          )
        );

        // حدث الـ state
        setWishlist(productDetails);

        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    }
  } catch (error) {
    console.log(error);
    toast.error(error)
  }
}


  return (
    <WishlistContext.Provider value={{ wishlist, fetchWishlist, isLoading, handleRemove }}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContext;