import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRotateLeft,
  faHeadset,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeFeatures() {
  return (
    <section className="">
      <div className="container ">
        <div>
        <ul className="  flex-wrap flex justify-center  items-center gap-3 py-8 *:bg-white *:border *:border-gray-100 *:p-4 *:m-0 *:flex space-y-5 *:items-center *:gap-3">
          <li>
            <div className="icon size-12 rounded-full bg-emerald-500/60 flex items-center justify-center">
              <FontAwesomeIcon
                className="text-emerald-800"
                icon={faTruckFast}
              />
            </div>
            <div className="content">
              <h4 className="font-semibold">Free Delivery</h4>
              <p className="text-gray-500">Orders $50 or more</p>
            </div>
          </li>
          <li>
            <div className="icon size-12 rounded-full bg-emerald-500/60 flex items-center justify-center">
              <FontAwesomeIcon icon={faArrowRotateLeft} />
            </div>
            <div className="content">
              <h4 className="font-semibold">30 Day Return</h4>
              <p className="text-gray-500">Satisfaction guaranteed</p>
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
              <h4 className="font-semibold">Secure payment</h4>
              <p className="text-gray-500">100% protected checkout</p>
            </div>
          </li>
          <li>
            <div className="icon size-12 rounded-full bg-emerald-500/60 flex items-center justify-center">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <div className="content">
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-gray-500">Ready To help any time</p>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
}
