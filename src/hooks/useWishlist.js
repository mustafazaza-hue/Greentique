import { removeFromWishlist } from "../Pages/services/removeFromWishlist";

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
      Swal.fire({
        title: "Deleted!",
        text: "Your item has been deleted.",
        icon: "success",
      });
      if (response.success) {
        setCartInfo(response.data);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
