import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faBars,
  faChartLine,
  faCreditCard,
  faHeart,
  faLocationDot,
  faShop,
  faStar,
  faUserPen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext/AuthContext";

export default function AccountLayout() {
  const { userInfo } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-12 bg-gray-100">
        <div className="container grid grid-cols-4 gap-5 items-start">
          <button
            className="lg:hidden mb-4 flex items-center gap-2 bg-btn-dark text-white px-4 py-2 rounded-md"
            onClick={() => setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
            Menu
          </button>
          <aside className="col-span-1 bg-white items-start p-4 rounded-lg shadow-md sm:hidden lg:block">
            <div className="userInfo py-3">
              <div className="flex items-center gap-3 ">
                <FontAwesomeIcon
                  className="text-btn-dark size-8!"
                  icon={faCircleUser}
                />
                <div className="content">
                  <h3>{userInfo.name}</h3>
                  <p className="text-sm text-gray-500">
                    {userInfo.email || "user@example.com"}
                  </p>
                </div>
              </div>
            </div>
            <div className="sideOptions py-6">
              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink
                    to="dashboard"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faChartLine} />
                    <span className="text-xl">Dashboard</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="orders"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faShop} />

                    <span className="text-xl">Orders</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="text-xl">Wishlist</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="favorite"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <span className="text-xl">Favorites</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="addresses"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span className="text-xl">Addresses</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="payment"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span className="text-xl">Payment Method</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="account"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faUserPen} />

                    <span className="text-xl">Account Details</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink className=" flex items-center gap-3 text-gray-500 hover:bg-btn-dark/20 hover:rounded-md p-3 hover:text-btn-dark transition-colors duration-200">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <span className="text-xl">Log Out</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </aside>
          <div className="col-span-3 bg-white items-start p-4 rounded-lg shadow-md">
            <Outlet />
          </div>
        </div>

        <aside
          className={`
            fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform lg:hidden
            transition-transform duration-300 z-50
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            lg:relative lg:translate-x-0 lg:h-auto lg:w-auto lg:col-span-1 lg:rounded-lg lg:shadow-md
          `}
        >
          <button
            className="lg:hidden absolute top-4 right-4 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} size="lg" />
          </button>

          <div className="p-4">
            <div className="userInfo py-3">
              <div className="flex items-center gap-3 ">
                <FontAwesomeIcon
                  className="text-btn-dark size-8"
                  icon={faBars}
                />
                <div className="content">
                  <h3>{userInfo.name}</h3>
                  <p className="text-sm text-gray-500">{userInfo.email}</p>
                </div>
              </div>
            </div>

              <ul className="flex flex-col gap-3">
                <li>
                  <NavLink
                    to="dashboard"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faChartLine} />
                    <span className="text-xl">Dashboard</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="orders"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faShop} />

                    <span className="text-xl">Orders</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="wishlist"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faHeart} />
                    <span className="text-xl">Wishlist</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="favorite"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faStar} />
                    <span className="text-xl">Favorites</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="addresses"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span className="text-xl">Addresses</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="payment"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span className="text-xl">Payment Method</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="account"
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-3 rounded-md transition-colors duration-200 
         hover:bg-btn-dark/20 hover:text-btn-dark 
         ${isActive ? "bg-btn-dark/20 text-btn-dark" : "text-gray-500"}`
                    }
                  >
                    <FontAwesomeIcon icon={faUserPen} />

                    <span className="text-xl">Account Details</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink className=" flex items-center gap-3 text-gray-500 hover:bg-btn-dark/20 hover:rounded-md p-3 hover:text-btn-dark transition-colors duration-200">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <span className="text-xl">Log Out</span>
                  </NavLink>
                </li>
              </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
