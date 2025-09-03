import { createContext, use, useContext, useEffect, useState } from "react";
import { addProductToCart } from "../../../Pages/services/addToCart";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";
import { getCartItem } from "../../../Pages/services/getCartItem";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { deleteItemFromCart } from "../../../Pages/services/deleteItemFromCart";
import { updateProductQuantity } from "../../../Pages/services/updateProductQuantity";
import { data } from "react-router";

export const CartContext = createContext(null);
export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fecthAddToCart({ id }) {
    try {
      setIsLoading(true);
      const response = await addProductToCart({ id });
      if (response.success) {
        toast.success("Product added successfully to your cart");
        setCartInfo(response.data);
        setIsLoading(false);
        console.log(response);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  async function handleGetCartItem() {
    try {
      setIsLoading(true)
      const response = await getCartItem();
      if (response.success) {
        setCartInfo(response.data);
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      throw error;
    }
  }
  useEffect(()=>{
    handleGetCartItem()
  },[])
  

  async function handleRemove({id}){
   try {
   const result = await Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#d33", 
  cancelButtonColor: "#3085d6",
  confirmButtonText: "Yes, delete it!"
})
  if (result.isConfirmed) {
    const response = await deleteItemFromCart({id})
    Swal.fire({
      title: "Deleted!",
      text: "Your item has been deleted.",
      icon: "success"
    });
    if(response.success){
      setCartInfo(response.data)
    }
    
  }
;
   } catch (error) {
    console.log(error);
    
   }
  }

   async function handleUpdate( {id,count}){
    try {
      const toastId = toast.loading("Updating Product Quantity")
      const response = await updateProductQuantity({id, count})
      if(response.success){
        setCartInfo(response.data)
      }
      toast.dismiss(toastId)
    } catch (error) {
      console.log(error);
      
    }
  }

  // "#3085d6"
  // "#d33"

  return (
    <CartContext.Provider value={{ cartInfo, isLoading, fecthAddToCart, handleRemove, handleUpdate, refreshCart:handleGetCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
