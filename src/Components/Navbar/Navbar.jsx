import {
  faEnvelope,
  faHeart,
  faIdCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faBars,
  faBolt,
  faBriefcaseMedical,
  faCarriageBaby,
  faChevronDown,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faShoppingCart,
  faUserPlus,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import FreshCartlogo from "../../assets/freshcart-logo.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { CartContext } from "../context/CartContext/Cart.context";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

export default function Navbar() {
const isOnline = useOnlineStatus();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  const { logOut, token } = useContext(AuthContext);
  const { cartInfo, isLoading } = useContext(CartContext);

  return (
    <>
      <header>
        <div className="container ">
          {/* top navbar */}
          <div className="hidden lg:flex text-sm py-2 justify-between items-center border-b border-gray-300/30">
            <ul className="flex items-center gap-4 *:flex *:gap-2 *:items-center">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:Support@greentique.com">
                  Support@greentique.com
                </a>
              </li>
              {isOnline && (
                <li className="text-btn-dark">
                  <FontAwesomeIcon className="text-btn-dark" icon={faWifi} />
                  <span>Online</span>
                </li>
              )}
            </ul>

            <ul className="flex items-center gap-4">
              <li>
                <Link to={"orders"}>Track Order</Link>
              </li>
              <li>
                <Link to={"about"}>About</Link>
              </li>
              <li>
                <Link to={"contact"}>Contact</Link>
              </li>
              <li>
                <select>
                  <option>EGP</option>
                  <option>AED</option>
                  <option>SAR</option>
                </select>
              </li>
              <li>
                <select>
                  <option value={"en"}>English</option>
                  <option value={"ar"}>Arabic</option>
                </select>
              </li>
            </ul>
          </div>
          {/* Main navigator */}
          <nav className="py-6 flex justify-between items-center">
            <h1>
              <NavLink to="/">
                <img src={FreshCartlogo} alt="FreshCartlogo " />
              </NavLink>
            </h1>
            <search className="relative hidden lg:block">
              <input
                className="form-control min-w-96"
                placeholder="Search For Products"
                type="text"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute right-2 -translate-1/2 top-1/2"
              />
            </search>
            {token ? (
              <>
                {" "}
                <ul className="hidden lg:flex gap-4 items-center ">
                  <li>
                    <NavLink
                      to="wishlist"
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[var(--color-btn-dark)]" : ""
                        } flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon className="text-lg" icon={faHeart} />
                      <span className="text-sm">Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="cart"
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[var(--color-btn-dark)]" : ""
                        } flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200`;
                      }}
                    >
                      <div className="relative">
                        <FontAwesomeIcon
                          className="text-lg"
                          icon={faShoppingCart}
                        />
                        <span className="absolute top-0 right-0 rounded-full bg-[var(--color-btn-dark)] text-white text-sm size-4 flex justify-center items-center -translate-y-1/2">
                          {cartInfo?.numOfCartItems}
                        </span>
                      </div>
                      <span className="text-sm">Cart</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="account"
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[var(--color-btn-dark)]" : ""
                        } flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon className="text-lg" icon={faUser} />
                      <span className="text-sm">Account</span>
                    </NavLink>
                  </li>
                  <li onClick={logOut}>
                    <NavLink className="flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200">
                      <FontAwesomeIcon
                        className="text-lg"
                        icon={faArrowRightFromBracket}
                      />
                      <span className="text-sm">LogOut</span>
                    </NavLink>
                  </li>
                </ul>{" "}
              </>
            ) : (
              <ul className="hidden lg:flex gap-4 items-center ">
                <li>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-[var(--color-btn-dark)]" : ""
                      } flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon className="text-lg" icon={faHeart} />
                    <span className="text-sm">Wishlist</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="cart"
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-[var(--color-btn-dark)]" : ""
                      } flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200`;
                    }}
                  >
                    <div className="relative">
                      <FontAwesomeIcon
                        className="text-lg"
                        icon={faShoppingCart}
                      />
                      <span className="absolute top-0 right-0 rounded-full bg-[var(--color-btn-dark)] text-white text-sm size-4 flex justify-center items-center -translate-y-1/2">
                        3
                      </span>
                    </div>
                    <span className="text-sm">Cart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="account"
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-[var(--color-btn-dark)]" : ""
                      } flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon className="text-lg" icon={faUser} />
                    <span className="text-sm">Account</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="signup"
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-[var(--color-btn-dark)]" : ""
                      } flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon className="text-lg" icon={faUserPlus} />
                    <span className="text-sm">SignUp</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="login"
                    className={({ isActive }) => {
                      return `${
                        isActive ? "text-[var(--color-btn-dark)]" : ""
                      } flex flex-col items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200`;
                    }}
                  >
                    <FontAwesomeIcon className="text-lg" icon={faIdCard} />
                    <span className="text-sm">LogIn</span>
                  </NavLink>
                </li>
              </ul>
            )}
            <button className="btn lg:hidden" onClick={toggleMenu}>
              {/* Hamburger icon */}
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon className="text-white" icon={faBars} />
              )}
            </button>
          </nav>
        </div>
        {/* category navigation */}
        <nav className="hidden lg:block bg-gray-100 py-4">
          <div className="container flex items-center gap-8">
            <div className="relative group">
              <button className="btn">
                <FontAwesomeIcon icon={faBars} />
                <span className="px-1">All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <menu className="group-hover:block  hidden absolute min-w-60 top-10 bg-white *:py-3.5 *:px-3 rounded-lg *:hover:bg-gray-100 transition-colors duration-200 shadow divide-y-2 divide-gray-200/30">
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      className="text-[var(--color-btn-dark)]"
                      fixedWidth
                      icon={faPerson}
                    />
                    <span>Men’s Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      className="text-[var(--color-btn-dark)]"
                      fixedWidth
                      icon={faPersonDress}
                    />
                    <span>Women’s Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      className="text-[var(--color-btn-dark)]"
                      fixedWidth
                      icon={faCarriageBaby}
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      className="text-[var(--color-btn-dark)]"
                      fixedWidth
                      icon={faBriefcaseMedical}
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      className="text-[var(--color-btn-dark)]"
                      fixedWidth
                      icon={faBolt}
                    />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex gap-2 items-center">
                    <FontAwesomeIcon
                      className="text-[var(--color-btn-dark)]"
                      fixedWidth
                      icon={faEllipsis}
                    />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </menu>
            </div>
            <ul className="flex  gap-5 ">
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-[var(--color-btn-dark)]" : ""}`;
                  }}
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-[var(--color-btn-dark)]" : ""}`;
                  }}
                  to={"/recentlyadded"}
                >
                  Recently Added
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-[var(--color-btn-dark)]" : ""}`;
                  }}
                  to={"/featureproducts"}
                >
                  Feature Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-[var(--color-btn-dark)]" : ""}`;
                  }}
                  to={"/offers"}
                >
                  Offers
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return `${isActive ? "text-[var(--color-btn-dark)]" : ""}`;
                  }}
                  to={"/brands"}
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {isMenuOpen && (
          <>
            <div
              className="  background inset-0 z-30 fixed bg-black/50"
              onClick={toggleMenu}
            ></div>
            <div className="animate-slide-in offcanvas fixed z-40 top-0 bottom-0 left-0 bg-white p-4 space-y-5">
              <div className="flex justify-between items-center">
                <img src={FreshCartlogo} alt="Fresh Cart logo" />
                <button
                  className="bg-gray-100 p-1.5 rounded-full"
                  onClick={toggleMenu}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <search className="relative py-2">
                <input
                  className="form-control min-w-96"
                  placeholder="Search For Products"
                  type="text"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute right-2 -translate-1/2 top-1/2"
                />
              </search>
              <div>
                <h2 className="text-xl font-semi-bold">Main menu</h2>
                <ul className="space-y-2 py-4 *:px-3 *:py-2 *:hover:bg-gray-100 transition-colors duration-200">
                  <li>
                    <NavLink
                      to="wishlist"
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "text-[var(--color-btn-dark)] bg-[var(--color-btn-dark)]/20"
                            : ""
                        } flex  items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200 px-2 py-3`;
                      }}
                    >
                      <span className="text-sm">Wishlist</span>
                      <FontAwesomeIcon className="text-lg" icon={faHeart} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="cart"
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-[var(--color-btn-dark)]" : ""
                        }  flex  items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200 px-2 py-3`;
                      }}
                    >
                      <div className="relative flex items-center gap-2">
                        <span className="text-sm">Cart</span>
                        <FontAwesomeIcon
                          className="text-lg"
                          icon={faShoppingCart}
                        />
                        <span className="absolute top-0 right-0 rounded-full bg-[var(--color-btn-dark)] text-white text-sm size-4 flex justify-center items-center -translate-y-1/2">
                          {cartInfo.numOfCartItems}
                        </span>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="account"
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "text-[var(--color-btn-dark)] bg-[var(--color-btn-dark)]/20"
                            : ""
                        } flex  items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200 px-2 py-3`;
                      }}
                    >
                      <span className="text-sm">Account</span>
                      <FontAwesomeIcon className="text-lg" icon={faUser} />
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semi-bold">Account</h2>
                {token ? (
                  <>
                    {" "}
                    <ul className="space-y-2 py-4 *:px-3 *:py-2 *:hover:bg-gray-100 transition-colors duration-200">
                      <li onClick={logOut}>
                        <NavLink className="flex  items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200 px-2 py-3">
                          <span className="text-sm">LogOut</span>
                          <FontAwesomeIcon
                            className="text-lg"
                            icon={faArrowRightFromBracket}
                          />
                        </NavLink>
                      </li>
                    </ul>
                  </>
                ) : (
                  <ul className="space-y-2 py-4 *:px-3 *:py-2 *:hover:bg-gray-100 transition-colors duration-200">
                    <li>
                      <NavLink
                        to="signup"
                        className={({ isActive }) => {
                          return `${
                            isActive
                              ? "text-[var(--color-btn-dark)] bg-[var(--color-btn-dark)]/20"
                              : ""
                          } flex  items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200 px-2 py-3`;
                        }}
                      >
                        <span className="text-sm">SignUp</span>
                        <FontAwesomeIcon
                          className="text-lg"
                          icon={faUserPlus}
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="login"
                        className={({ isActive }) => {
                          return `${
                            isActive
                              ? "text-[var(--color-btn-dark)] bg-[var(--color-btn-dark)]/20"
                              : ""
                          } flex  items-center gap-2 text-sm hover:text-[var(--color-btn-dark)] transition-colors duration-200 px-2 py-3`;
                        }}
                      >
                        <span className="text-sm">LogIn</span>
                        <FontAwesomeIcon className="text-lg" icon={faIdCard} />
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
