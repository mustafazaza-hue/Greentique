import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Brands from "./Pages/Brands/Brands";
import Cart from "./Pages/Cart/Cart";
import Categories from "./Pages/Categories/Categories";
import Checkout from "./Pages/Checkout/Checkout";
import Favorite from "./Pages/Favorite/Favorite";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import Orders from "./Pages/Orders/Orders";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import SearchProduct from "./Pages/SearchProduct/SearchProduct";
import SignUp from "./Pages/SignUp/SignUp";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import Wishlist from "./Pages/Wishlist/Wishlist";
import { ToastContainer } from "react-toastify";
import FeatureProducts from "./Pages/FeatureProducts/FeatureProducts";
import ProductProvider from "./Components/context/ProductContext/ProductContext";
import CategoriesProvider from "./Components/context/CategoriesContext";
import AuthProvider from "./Components/context/AuthContext/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./Components/context/CartContext/Cart.context";
import AccountLayout from "./Components/AccountLayout/AccountLayout";
import OfflineScreen from "./Components/OfflineScreen/OfflineScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WishlistProvider } from "./Components/context/WishListContext/Wishlist.context";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "brands",
          element: (
            <ProtectedRoute>
              <Brands />
            </ProtectedRoute>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },

        {
          path: "account",
          element: (
            <ProtectedRoute>
              <AccountLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "wishlist",
              element: (
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              ),
            },
            {
              path: "orders",
              element: (
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              ),
            },
            {
              path: "favorite",
              element: (
                <ProtectedRoute>
                  <Favorite />
                </ProtectedRoute>
              ),
            },
          ],
        },

        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          ),
        },

        {
          path: "forgetPassword",
          element: <ForgetPassword />,
        },

        {
          path: "product/:id",
          element: <ProductDetails />,
        },
        {
          path: "searchproduct",
          element: (
            <ProtectedRoute>
              <SearchProduct />
            </ProtectedRoute>
          ),
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "verifyemail",
          element: (
            <ProtectedRoute>
              <VerifyEmail />
            </ProtectedRoute>
          ),
        },
        {
          path: "featureproducts",
          element: <FeatureProducts />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <OfflineScreen>
          <WishlistProvider>
            <AuthProvider>
              <CartProvider>
                <ProductProvider>
                  <CategoriesProvider>
                    <RouterProvider router={router}></RouterProvider>
                    <ToastContainer closeOnClick />
                  </CategoriesProvider>
                </ProductProvider>
              </CartProvider>
            </AuthProvider>
          </WishlistProvider>
        </OfflineScreen>
      </QueryClientProvider>
    </>
  );
}

export default App;
