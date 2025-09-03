import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faClock,
  faLock,
  faPeopleGroup,
  faStar,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import loginImage from "../../assets/login-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { API_CONFIG } from "../config";
import { passwordStrenght } from "../utils/passwordStrength";
import { AuthContext } from "../../Components/context/AuthContext/AuthContext";

export default function Login() {
  const {token, setToken}= useContext(AuthContext)
  const navigate = useNavigate();
  const [isExistError, setExistError] = useState(null);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const location =useLocation()
const from = location.state?.from || "/";

  function togglePasswordVisibility() {
    setPasswordVisible(!isPasswordVisible);
  }

  function handleChange(e) {
    setExistError("");
    formik.handleChange(e);
  }

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("email is required")
      .email("email is not valid"),

    password: yup
      .string()
      .required("password is required")
      .matches(
        passwordRegex,
        "password must be at least 8 characters, one uppercase, one lowercase, one number and one special character"
      ),
  });

  async function handleSignUp(values) {
    try {
      const options = {
        method: "POST",
        url: `${API_CONFIG.baseUrl}/auth/signin`,
        data: {
          email: values.email,
          password: values.password,
        },
      };
      const { data } = await axios.request(options);
      if (data.message === "success") {
        toast.success("Welcome Back!");
        if(values.rememperme){
          localStorage.setItem("token" , data.token)
        }else {
          sessionStorage.setItem("token", data.token )
        }
        setToken(data.token)
        setTimeout(() => {}, navigate(from), 2000);
      }
    } catch (error) {
      setExistError(error.response.data.message);
    }
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememperme: false,
    },
    validationSchema,
    onSubmit: handleSignUp,
  });

  const passwordFeedback = passwordStrenght(formik.values.password);
  return (
    <>
      <main className="bg-gray-50 ">
        <div className="container grid lg:grid-cols-2 gap-6 py-4">
          <div className="flex flex-col items-center justify-center py-30 space-y-5">
            <img
              src={loginImage}
              alt="Fresh Groceries"
              className="w-3/5 rounded-2xl shadow-lg"
            />
            <div className="content flex flex-col items-center justify-center space-y-5">
              <h2 className="font-bold text-3xl">Fresh Groceries Delivered</h2>
              <p>
                Join thousand of happy customers who trust fesh cart for their
                daily grocery needs
              </p>
              <ul className="flex gap-4 justify-center items-center *:flex *:items-center *:gap-2">
                <li>
                  <div className="icon">
                    <FontAwesomeIcon
                      className="text-emerald-800"
                      icon={faTruckFast}
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-500">Free Delivery</h4>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon
                      className="text-emerald-800"
                      icon={faQuestionCircle}
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-500">Secure Payment</h4>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon
                      className="text-emerald-800"
                      icon={faClock}
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-500">24/7 Support</h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg space-y-8 w-4/5">
            <div className="logo flex items-center justify-center mb-3">
              <h1 className="text-3xl font-bold">
                <span className="text-[var(--color-btn-dark)]">Fresh</span>Cart
              </h1>
            </div>
            <div className="welcome-msg flex flex-col items-center justify-center space-y-3">
              <h2 className="font-semibold text-3xl">Welcome Back !</h2>
              <p>Sign in to continue your fresh shoping experience</p>
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
              <span className="absolute top-1/2 left-1/2 -translate-1/2 px-4 bg-white text-center">
                OR CONTENIUE WITH EMAIL
              </span>
            </div>
            <form className="space-y-9" onSubmit={formik.handleSubmit}>
              <div className="email flex flex-col gap-1 relative">
                <label htmlFor="name">Email*</label>
                <input
                  className="form-control pl-10"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Example@gamil.com"
                  value={formik.values.email}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-sm text-red-500">{formik.errors.email}</p>
                )}
                {isExistError && (
                  <p className="text-sm text-red-500"> {isExistError} </p>
                )}
                <FontAwesomeIcon
                  className="absolute top-12 left-5 -translate-1/2"
                  icon={faEnvelope}
                />
              </div>
              <div className="password flex flex-col gap-1 relative">
                <label htmlFor="password">Password*</label>
                <input
                  className="form-control pl-10"
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Create A Strong Password"
                  value={formik.values.password}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                />
                <FontAwesomeIcon
                  className="absolute top-12 left-5 -translate-1/2"
                  icon={faLock}
                />
                {isPasswordVisible ? (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={togglePasswordVisibility}
                    className="absolute top-12 cursor-pointer -translate-1/2 right-3"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={togglePasswordVisibility}
                    className="absolute top-12 cursor-pointer -translate-1/2 right-3"
                  />
                )}
                {/* <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisibility} className="absolute top-12 cursor-pointer -translate-1/2 right-3"/> */}
                <Link
                  className="text-[var(--color-btn-dark)] absolute right-3 top-0"
                  to={"/forgetPassword"}
                >
                  Forget Password ?
                </Link>
                {formik.values.password && (
                  <div className="password-strength flex items-center gap-2">
                    <div className="bar overflow-hidden rounded-xl bg-gray-200 w-full h-1">
                      <div
                        className={`progress ${passwordFeedback.width} ${passwordFeedback.bgColor} h-full`}
                      ></div>
                    </div>
                    <span className="text-sm text-nowrap text-center ">{passwordFeedback.text}</span>
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
              <div className="rememperme">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="rememperme"
                    id="rememperme"
                    className="accent-[var(--color-btn-dark)] size-4"
                    value={formik.values.rememperme}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="rememperme">Keep me signed in</label>
                </div>
              </div>
              <button
                className="btn flex items-center gap-2 w-full justify-center"
                type="submit"
              >
                <span>sign in</span>
              </button>
            </form>
            <div className="form-footer ms-2  border-t border-gray-100 pt-4 flex flex-col items-center justify-center space-y-3">
              <div className="content">
                <p className="">
                  New to Fresh Cart ?
                  <Link to="/signup" className="text-[var(--color-btn-dark)]">
                    Create an Account
                  </Link>
                </p>
              </div>
              <div>
                <ul className="flex *:gap-2 *:flex items-center justify-center gap-3">
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        className="text-emerald-800"
                        icon={faLock}
                      />
                    </div>
                    <div className="text">
                      <p>SSl Secured</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        className="text-emerald-800"
                        icon={faPeopleGroup}
                      />
                    </div>
                    <div className="text">
                      <p>50K+ Users</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        className="text-emerald-800"
                        icon={faStar}
                      />
                    </div>
                    <div className="text">
                      <p>4.9 Rating</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
