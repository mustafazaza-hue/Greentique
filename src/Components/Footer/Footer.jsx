import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import FreshCartLogo from "../../assets/freshcart-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import minilogo from "../../assets/mini-logo.png";

export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-white border-t border-gray-200/40">
        <div className="container">
          <div className="grid md:grid-cols-2 xl:grid-cols-5">
            <div className="xl:col-span-2 space-y-3">
              <img src={FreshCartLogo} alt="FreshCartLogo" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit nihil corporis voluptatum, libero recusandae numquam.
                Animi ducimus ratione minima maiores recusandae praesentium,
                molestias officiis doloremque culpa, adipisci sit, laborum ad!
              </p>
              <ul className="flex items-center space-y-2 gap-4 text-xl py-8 *:text-gray-500 *:hover:text-[var(--color-btn-darker)] *:transition-colors *:duration-200">
                <li>
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faFacebookF}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faTwitter}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faInstagram}
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={faPinterestP}
                  />
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <ul className="space-y-3 *:hover:text-[var(--color-btn-darker)] *:transition-colors *:duration-200">
                <li>
                  <Link>Men’s Fashion</Link>
                </li>
                <li>
                  <Link>Women’s Fashion</Link>
                </li>
                <li>
                  <Link>Baby & Toys</Link>
                </li>
                <li>
                  <Link>Beauty & Health</Link>
                </li>
                <li>
                  <Link>Electronics</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <ul className="space-y-3 *:hover:text-[var(--color-btn-darker)] *:transition-colors *:duration-200">
                <li>
                  <Link>About Us</Link>
                </li>
                <li>
                  <Link>Contact Us</Link>
                </li>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Terms ff Services</Link>
                </li>
                <li>
                  <Link>Shipping Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">Customer Services</h2>
              <ul className="space-y-3 *:hover:text-[var(--color-btn-darker)] *:transition-colors *:duration-200">
                <li>
                  <Link>My Account</Link>
                </li>
                <li>
                  <Link>My Orders</Link>
                </li>
                <li>
                  <Link>Wishlist</Link>
                </li>
                <li>
                  <Link>Returns & Refunds</Link>
                </li>
                <li>
                  <Link>Help Center</Link>
                </li>
              </ul>
            </div>
          </div>
            <div className="flex justify-between items-center py-5 border-t border-gray-200/40">
              <p>
                &copy; {new Date().getFullYear()} Fresh Cart : All Rights
                Reserved
              </p>
              <img src={minilogo} className="w-8" alt="Fresh Cart Mini Logo" />
            </div>
        </div>
      </footer>
    </>
  );
}
