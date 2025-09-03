import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useNavigate } from "react-router";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faShieldHalved,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import authorreview from "../../assets/review-author.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { API_CONFIG } from "../config";
import { passwordStrenght } from "../utils/passwordStrength";
import { AuthContext } from "../../Components/context/AuthContext/AuthContext";
export default function SignUp() {
  const navigate = useNavigate();
  const [isExistError, setExistError] = useState(null);

  const phoneRegex = /^01[0125][0-9]{8}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("email is not valid"),
    phone: yup
      .string()
      .required("phone is Required")
      .matches(phoneRegex, "Egyptian phone number is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        passwordRegex,
        "password must be at least 8 characters, one uppercase, one lowercase, one number and one special character"
      ),
    rePassword: yup
      .string()
      .required("confirm password is required")
      .oneOf([yup.ref("password")], "passwords must match"),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  async function handleSignUp(values) {
    try {
      const options = {
        method: "POST",
        url: `${API_CONFIG.baseUrl}/auth/signup`,
        data: {
          name: values.name,
          email: values.email,
          password: values.password,
          rePassword: values.rePassword,
          phone: values.phone,
        },
      };
      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("Your account has been created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setExistError(error.response.data.message);
    }
  }

  // try {
  //   const response = await signUp(values);
  //   console.log(response);

  //   if (response.success) {
  //     setUserDetails(response.user); // لو السيرفر بيرجع user
  //     toast.success("Your account has been created successfully");
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 2000);
  //   }
  //   console.log(setUserDetails);
  // } catch (error) {
  //   const message = error?.response?.data?.message || error.message || "Something went wrong";
  //   setExistError(message);
  // }

  //      const options = {
  //   method : "POST",
  //   url : `${API_CONFIG.baseUrl}/auth/signup`,
  //   data: {
  //     name: values.name,
  //     email: values.email,
  //     password: values.password,
  //     rePassword: values.rePassword,
  //     phone: values.phone,
  //   },
  //  }
  //  const {data}= await axios.request(options)
  //  if (data.message ==="success"){
  //   toast.success("Your account has been created successfully")
  //   console.log(data);

  //   setTimeout(() => {

  //   }, navigate("/login"),2000);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignUp,
  });
  const passwordFeedback = passwordStrenght(formik.values.password);

  return (
    <>
      <main className="py-12">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="welcome-msg">
              <h2 className="text-3xl font-bold">
                Welcome To
                <span className="text-[var(--color-btn-dark)]">Fresh Cart</span>
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia laudantium cum minima quis ducimus rerum!
              </p>
            </div>
            <ul className="*:flex space-y-5 *:items-center *:gap-3">
              <li>
                <div className="icon size-12 rounded-full bg-emerald-500/60 flex items-center justify-center">
                  <FontAwesomeIcon className="text-emerald-800" icon={faStar} />
                </div>
                <div className="content">
                  <h4 className="font-semibold">Premium Quality</h4>
                  <p className="text-gray-500">
                    Premium Quality Products Sourced From Trusted Suppliers.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-emerald-500/60 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-emerald-800"
                    icon={faTruckFast}
                  />
                </div>
                <div className="content">
                  <h4 className="font-semibold">Fast Delivery</h4>
                  <p className="text-gray-500">
                    Same-day Available in Most Areas
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 rounded-full bg-emerald-500/60 flex items-center justify-center">
                  <FontAwesomeIcon
                    className="text-emerald-800"
                    icon={faShieldHalved}
                  />
                </div>
                <div className="content">
                  <h4 className="font-semibold">Secure Shopping</h4>
                  <p className="text-gray-500">
                    Your Data And Payments Are Completely Secure
                  </p>
                </div>
              </li>
            </ul>
            <div className="feed-back p-6 bg-white rounded-lg shadow-md ">
              <div className="flex items-center gap-3">
                <img
                  className="size-12 rounded-full"
                  src={authorreview}
                  alt=""
                />
                <div>
                  <h3>sarah Johnson</h3>
                  <div className="rating">
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                    <FontAwesomeIcon
                      className="text-yellow-400"
                      icon={faStar}
                    />
                  </div>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-700 italic mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  doloremque sunt commodi optio quaerat, ullam eos doloribus
                  iure quia sint itaque soluta, accusamus officia debitis minima
                  sequi numquam obcaecati? Necessitatibus, vitae tempora.
                </p>
              </blockquote>
            </div>
          </div>
          <div className=" p-6 shadow-md rounded-lg space-y-8">
            <div className="sign-header text-center">
              <h2 className="text-3xl font-semibold">Create Your Account</h2>
              <p className="mt-1">Start Your Fresh Journey With Us Today</p>
            </div>
            <div className="sign-btn flex *:w-full *:flex *:justify-center *:items-center *:gap-2 gap-3">
              <button className="btn bg-transparent border border-gray-400/20 hover:bg-gray-100">
                <FontAwesomeIcon
                  className="text-red-700 text-xl"
                  icon={faGoogle}
                />
                <span className="text-black">Google</span>
              </button>
              <button className="btn bg-transparent border border-gray-400/20 hover:bg-gray-100">
                <FontAwesomeIcon
                  className="text-blue-600 text-xl"
                  icon={faFacebook}
                />
                <span className="text-black">Facebook</span>
              </button>
            </div>
            <div className="w-full h-0.5 bg-gray-300/40 relative">
              <span className="absolute top-1/2 left-1/2 -translate-1/2 px-4 bg-white">
                Or
              </span>
            </div>
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="name flex flex-col gap-1">
                <label htmlFor="name">Name*</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ali"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-sm text-red-500"> {formik.errors.name} </p>
                )}
              </div>
              <div className="email flex flex-col gap-1">
                <label htmlFor="name">Email*</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Example@gamil.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-red-500">{formik.errors.email}</p>
                )}
                {isExistError && (
                  <p className="text-sm text-red-500"> {isExistError} </p>
                )}
              </div>
              <div className="phone flex flex-col gap-1">
                <label htmlFor="phone">Phone*</label>
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+1 234 567 8900"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-sm text-red-500">
                    {" "}
                    {formik.errors.phone}{" "}
                  </p>
                )}
              </div>
              <div className="password flex flex-col gap-1">
                <label htmlFor="password">Password*</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Create A Strong Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.values.password && (
                  <div className="password-strength flex items-center gap-2">
                    <div className="bar overflow-hidden rounded-xl bg-gray-200 w-full h-1">
                      <div
                        className={`progress ${passwordFeedback.width} ${passwordFeedback.bgColor} h-full`}
                      ></div>
                    </div>
                    <span className="text-sm text-nowrap text-center ">
                      {passwordFeedback.text}
                    </span>
                  </div>
                )}
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-sm text-red-500">
                    {formik.errors.password}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500 ">
                    Must be at least 8 character with numbers and Symbols
                  </p>
                )}
              </div>
              <div className="rePassword flex flex-col gap-1">
                <label htmlFor="rePassword">rePassword*</label>
                <input
                  className="form-control"
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  placeholder="Confirm Your Password"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="text-sm text-red-500">
                    {formik.errors.rePassword}
                  </p>
                )}
              </div>
              <div className="terms">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    className="accent-[var(--color-btn-dark)] size-4"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link className="text-[var(--color-btn-dark)]" to="/terms">
                      Terms of services
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-[var(--color-btn-dark)]"
                      to="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-sm text-red-500 mt-2">
                    {formik.errors.terms}
                  </p>
                )}
              </div>
              <button
                className="btn flex items-center gap-2 w-full justify-center"
                type="submit"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Create My Account</span>
              </button>
              <p className="text-center">
                Already have an account{" "}
                <Link
                  className="text-[var(--color-btn-dark)] underline"
                  to={"/login"}
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
