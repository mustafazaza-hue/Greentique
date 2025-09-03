import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faBoxOpen,
  faMagnifyingGlass,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagePlaceHolder1 from "../../assets/iphone.jpg";
import imagePlaceHolder2 from "../../assets/lenovo-ideapad-3.jpg";
import imagePlaceHolder3 from "../../assets/canon-camera.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/context/AuthContext/AuthContext";
import { getuserOrders } from "../services/Orders";
import Loading from "../../Components/Loading/Loading";
import { date } from "yup";

export default function Orders() {
  const { userInfo } = useContext(AuthContext);
  const [orders, setorders] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function handleOrders() {
    try {
      setIsLoading(true);
      const response = await getuserOrders({ userId: userInfo.id });
      if (response.success) {
        setIsLoading(false);
        setorders(response.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    handleOrders();
  }, []);
  console.log(orders);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <section className="p-4">
        <div className="heading flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">My Orders</h2>
          </div>
          <search className="relative">
            <input
              className="form-control bg-gray-100 min-w-60"
              placeholder="Search Orders..."
              type="text"
            />
            <FontAwesomeIcon
              className="absolute top-1/2 right-0 -translate-1/2 pr-1"
              icon={faMagnifyingGlass}
            />
          </search>
        </div>
        <div className="orders space-y-3 py-9">
          {orders.map((order) => (
            <div
              key={order.id}
              className="order border-2 border-gray-200 rounded-md"
            >
              <div className="order-datails  flex items-center justify-between bg-gray-50 p-3 border-b-2 border-gray-200 rounded-md ">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h4>Order #FC{order.id}</h4>
                    {order.isPaid ? (
                      <span className="p-1 bg-green-100 text-green-600 rounded-lg text-sm">
                        Paid
                      </span>
                    ) : (
                      <span className="p-1 bg-red-100 text-red-600 rounded-lg text-sm">
                        UnPaid
                      </span>
                    )}
                    {order.isDelivered ? (
                      <span className="p-1 bg-green-100 text-green-600 rounded-lg text-sm">
                        Delivered
                      </span>
                    ) : (
                      <span className="p-1 bg-blue-100 text-blue-600 rounded-lg text-sm">
                        Processing
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-md text-gray-500">
                      Placed on {new Date(order.createdAt).toDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-btn-dark flex items-center gap-2 cursor-pointer">
                    <FontAwesomeIcon icon={faRotateLeft} />
                    <span>Reorder</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <FontAwesomeIcon icon={faEye} />
                    <span>View Details</span>
                  </div>
                </div>
              </div>
              <div className="oreder-content sm:flex-col py-4 lg:flex-row flex items-center ">
                <div
                  className="order-images w-fit flex items-center gap-3 relative sm:after:hidden lg:after:block
  after:content-[''] after:block after:w-1 after:h-2/3 after:items-start after:bg-gray-400 after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 after:ml-6"
                >
                  {order.cartItems.slice(0,3).map((item) => (
                    <div className="relative ">
                      <img
                        className="size-25! object-contain"
                        src={item.product.imageCover}
                        alt=""
                      />
                      <span className="absolute top-0 right-0 w-6 h-6 text-center rounded-md text-white bg-black">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
                <div className=" py-4 px-12 flex items-center justify-between gap-16 relative sm:after:hidden lg:after:block  after:content-[''] after:block after:w-1 after:h-2/3 after:items-start after:bg-gray-400 after:absolute after:left-full after:top-1/2 after:-translate-y-1/2 ">
                  <div>
                    <span className="text-md text-gray-500">items</span>
                    <h4 className="font-semibold text-md">
                      {order.cartItems.length} Items
                    </h4>
                  </div>
                  <div>
                    <span className="text-md text-gray-500">Total Amount</span>
                    <h4 className="font-semibold text-md">
                      ${order.totalOrderPrice}
                    </h4>
                  </div>
                  <div>
                    <span className="text-md text-gray-500">Delivered to</span>
                    <h4 className="font-semibold text-md">
                      {order.shippingAddress.city}
                    </h4>
                  </div>
                </div>
                <div className="buttons flex flex-col gap-3 pl-6">
                  <button className="btn w-fit">Track Order</button>
                  {order.isDelivered ? (
                    <button className="btn w-fit text-black bg-transparent border-2 border-gray-200">
                      Write Review
                    </button>
                  ) : (
                    <button className="btn w-fit text-black bg-transparent border-2 border-gray-200">
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {orders.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
            <FontAwesomeIcon
              icon={faBoxOpen}
              className="text-gray-400 text-6xl mb-4"
            />

            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              there are no orders yet
            </h2>
            <p className="text-gray-500 mb-6">
              it’s Look like you haven’t made your first order yet
            </p>

            <button className="px-6 py-3 bg-btn-dark text-white rounded-2xl shadow-md hover:bg-green-600 transition-all">
              Shop now{" "}
            </button>
          </div>
        )}
      </section>
    </>
  );
}
