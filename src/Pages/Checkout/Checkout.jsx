import {
  faCcAmex,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faCircleInfo,
  faLock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imagePlaceholder from "../../assets/canon-camera.jpg";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../Components/context/CartContext/Cart.context";
import Loading from "../../Components/Loading/Loading";
import { createOrder } from "../services/payment";
import { toast } from "react-toastify";

export default function Checkout() {
  const { cartInfo, isLoading, refreshCart } = useContext(CartContext);
  const navigate = useNavigate();

  async function handleCreateOrder(values) {
    try {
      const response = await createOrder({
        cartId,
        paymentMethod: values.paymentMethod,
        shippingAddress: values.shippingAddress,
      });
      if (response.success) {
        if (response.data.session) {
          toast.loading("Redirecting to payment gateway...");

          setTimeout(() => {
            location.href = response.data.session.url;
          }, 3000);
        }
        toast.success("Order created successfully");
        refreshCart();
        setTimeout(() => {
          navigate("/account/orders");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const phoneRegex = /^01[0125][0-9]{8}$/;
  const validationSchema = yup.object({
    paymentMethod: yup.string().required("payment method is required"),
    shippingAddress: yup.object({
      details: yup.string().required("address details is required"),
      phone: yup
        .string()
        .matches(phoneRegex, "Only Egyptian phone numbers are allowed"),
      city: yup.string().required("city is required"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handleCreateOrder,
  });

  if (isLoading) {
    return <Loading />;
  }
  const { cartId, data, numOfCartItems } = cartInfo;
  const { totalCartPrice, products } = data;

  // ${formik.values.paymentMethod==="cod" ? `bg-btn-dark/30` : ``}
  return (
    <>
      <section className="bg-gray-100 py-5">
        <div className="container max-w-6xl">
          <form onSubmit={formik.handleSubmit}>
            <h1 className=" py-3 text-2xl font-bold">CheckOut</h1>
            <div className="grid grid-cols-3 gap-6 items-start">
              <div className="paymentMethod col-span-2 p-4 rounded-lg bg-white">
                <h2 className="font-bold text-lg mb-5">Payment Method</h2>
                <div className="flex flex-col gap-6">
                  <div className="paymentOptions space-y-4">
                    <div
                      className={`${
                        formik.values.paymentMethod === "cod"
                          ? `bg-btn-dark/20`
                          : ``
                      } p-6 border-2 border-gray-200 rounded-lg`}
                    >
                      <label
                        htmlFor="cod"
                        className={` flex flex-col gap-3 cursor-pointer`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="cod"
                              id="cod"
                              className="mr-2"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "paymentMethod",
                                  e.target.value
                                );
                              }}
                              checked={formik.values.paymentMethod === "cod"}
                            />
                            <FontAwesomeIcon
                              className="size-6 text-btn-dark"
                              icon={faMoneyBillWave}
                            />
                            <div className="flex flex-col">
                              <h3 className="font-semibold">
                                Cash on Delivery
                              </h3>
                              <p className="text-gray-500 text-sm">
                                Pay when your order arrives
                              </p>
                            </div>
                          </div>
                          <span className="text-btn-dark font-medium">
                            No extra charges
                          </span>
                        </div>

                        {formik.values.paymentMethod === "cod" && (
                          <div className="flex items-center gap-2 bg-btn-dark/10 py-2 px-3 rounded-md text-sm">
                            <FontAwesomeIcon
                              className="size-4 text-btn-dark"
                              icon={faCircleInfo}
                            />
                            <p className="text-btn-dark">
                              Please keep exact change ready for hassle-free
                              delivery
                            </p>
                          </div>
                        )}
                      </label>
                    </div>

                    <div
                      className={`${
                        formik.values.paymentMethod === "online"
                          ? `bg-btn-dark/20`
                          : ``
                      } p-6 border-2 border-gray-200 rounded-lg`}
                    >
                      <label
                        htmlFor="online"
                        className="flex flex-col gap-3 cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="online"
                              id="online"
                              className="mr-2"
                              onChange={(e) => {
                                formik.setFieldValue(
                                  "paymentMethod",
                                  e.target.value
                                );
                              }}
                              checked={formik.values.paymentMethod === "online"}
                            />
                            <FontAwesomeIcon
                              className="size-6 text-btn-dark"
                              icon={faCreditCard}
                            />
                            <div className="flex flex-col">
                              <h3 className="font-semibold">Online Payment</h3>
                              <p className="text-gray-500 text-sm">
                                Pay securely with card or digital wallet
                              </p>
                            </div>
                          </div>
                          <span className="text-green-600 font-medium">
                            Recommended
                          </span>
                        </div>

                        {formik.values.paymentMethod === "online" && (
                          <div className="flex items-center gap-2 bg-blue-50 border-2 border-blue-200 py-2 px-3 rounded-md text-sm">
                            <FontAwesomeIcon
                              className="size-4 text-blue-600"
                              icon={faCircleInfo}
                            />
                            <p>
                              You will be redirected to secure payment gateway
                              to complete your transaction
                            </p>
                          </div>
                        )}
                      </label>
                    </div>
                  </div>

                  <div className="shipping-address">
                    <h2 className="font-bold text-lg mb-5">Billing Address</h2>
                    <div className="address flex flex-col ">
                      <label className=" mb-2" htmlFor="address">
                        Address Details*
                      </label>
                      <textarea
                        name="shippingAddress.details"
                        id="address"
                        placeholder="Enter Your Full Address"
                        className="form-control mb-2 min-h-20 max-h-40"
                        value={formik.values.shippingAddress.details}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      ></textarea>
                      {formik.errors.shippingAddress?.details &&
                        formik.touched.shippingAddress?.details && (
                          <>
                            {" "}
                            <p className="text-sm text-red-500 mt-1">
                              {formik.errors.shippingAddress?.details}
                            </p>{" "}
                          </>
                        )}
                    </div>
                    <div className="flex gap-3">
                      <div className="phonenumber flex flex-col gap-2 w-full">
                        <label htmlFor="phone">Phone Number*</label>
                        <input
                          type="tel"
                          id="phone"
                          name="shippingAddress.phone"
                          placeholder="01123456789"
                          className="form-control mb-2"
                          value={formik.values.shippingAddress.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.errors.shippingAddress?.phone &&
                          formik.touched.shippingAddress?.phone && (
                            <>
                              {" "}
                              <p className="text-sm text-red-500 mt-1">
                                {formik.errors.shippingAddress?.phone}
                              </p>{" "}
                            </>
                          )}
                      </div>
                      <div className="city flex flex-col gap-2 w-full">
                        <label htmlFor="city">City*</label>
                        <input
                          type="text"
                          id="city"
                          name="shippingAddress.city"
                          placeholder="Ismailia City"
                          className="form-control mb-2"
                          value={formik.values.shippingAddress.city}
                          onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}

                        />
                        {formik.errors.shippingAddress?.city &&
                          formik.touched.shippingAddress?.city && (
                            <>
                              {" "}
                              <p className="text-sm text-red-500 mt-1">
                                {formik.errors.shippingAddress?.city}
                              </p>{" "}
                            </>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="orderSummary p-4 rounded-lg bg-white col-span-1">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="cartItems border-b-2 border-gray-200 mb-4 pb-5 max-h-48 overflow-auto">
                  {products.map((product) => (
                    <Link
                      to={`/product/${product.product.id}`}
                      key={product._id}
                      className="item flex items-center gap-2 justify-between "
                    >
                      <div className="item-content flex items-center gap-2">
                        <img
                          className="size-14 object-contain"
                          src={product.product.imageCover}
                          alt=""
                        />
                        <div className="flex flex-col">
                          <h3 className="text-md">{product.product.title}</h3>
                          <span className="text-sm text-gray-500">
                            {" "}
                            Qty : {product.count}
                          </span>
                        </div>
                      </div>
                      <div className="pricing">
                        <span className="font-semibold">${product.price}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="order-details border-b-2 border-gray-200 mb-4 pb-4">
                  <div className=" flex items-center justify-between space-y-4">
                    <span className="text-lg text-gray-500">Suptotal</span>
                    <span className="font-semibold">${totalCartPrice}</span>
                  </div>
                  <div className=" flex items-center justify-between space-y-4">
                    <span className="text-lg text-gray-500">Delivery</span>
                    <span className="font-semibold">$70</span>
                  </div>
                  <div className=" flex items-center justify-between space-y-4">
                    <span className="text-lg text-gray-500">tax</span>
                    <span className="font-semibold">
                      ${Math.trunc(totalCartPrice * 0.14)}
                    </span>
                  </div>
                </div>
                <div className="total flex items-center justify-between mb-5">
                  <h2 className="font-semibold text-2xl">Total</h2>
                  <span className="font-semibold">
                    ${totalCartPrice + 70 + Math.trunc(totalCartPrice * 0.14)}
                  </span>
                </div>
                <div className="buttons space-y-3 mb-4">
                  <button
                    type="submit"
                    className="btn w-full flex items-center gap-2 justify-center"
                  >
                    <span>Proceed to payment</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                  <Link
                    to={"/cart"}
                    className="btn w-full flex items-center gap-2 justify-center border-2 border-gray-300 bg-transparent text-black"
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span>Previous Step</span>
                  </Link>
                </div>
                <div className="more-details">
                  <h3 className="text-lg mb-3">Secure Checkout</h3>
                  <div className="flex items-center gap-2 pb-4">
                    <FontAwesomeIcon
                      className="size-5! text-btn-dark"
                      icon={faLock}
                    />
                    <p>Your payment information is secure</p>
                  </div>
                  <div>
                    <ul className="payment-icons flex items-center gap-4 ">
                      <li>
                        <FontAwesomeIcon
                          className="size-8! text-blue-700"
                          icon={faCcVisa}
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          className="size-8! text-orange-600"
                          icon={faCcMastercard}
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          className="size-8! text-sky-600"
                          icon={faCcAmex}
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          className="size-8! text-blue-800"
                          icon={faCcPaypal}
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          className="size-8!"
                          icon={faCcApplePay}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
