import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination} from 'swiper/modules';
import homeSliderImage from "../../assets/home-slider-1.png";
export default function HomeSlider() {
  return (
    <>
      <Swiper 
      loop={true}
      modules={[Pagination, Navigation]}
      pagination ={{clickable: true}}
      navigation
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white py-30 px-20 bg-gradient-to-r from-[var(--color-btn-dark)]/95 to-[var(--color-btn-dark)]/40">
              <div className="container space-y-4">
                <h2 className=" text-2xl font-bold">
                  Fresh Product Delievered
                  <br />
                  to your door
                </h2>
                <p>Get 20% off for your first order </p>
                <div className="space-x-3">
                  <button className="btn text-[var(--color-btn-dark)] bg-white hover:bg-gray-100">Shop now</button>
                  <button className="btn bg-transparent border text-white hover:bg-white hover:text-[var(--color-btn-dark)]">view Deals</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white py-30 px-20 bg-gradient-to-r from-[var(--color-btn-dark)]/95 to-[var(--color-btn-dark)]/40">
              <div className="container space-y-4">
                <h2 className=" text-2xl font-bold">
                  Fresh Product Delievered
                  <br />
                  to your door
                </h2>
                <p>Get 20% off for your first order </p>
                <div className="space-x-3">
                  <button className="btn text-[var(--color-btn-dark)] bg-white hover:bg-gray-100">Shop now</button>
                  <button className="btn bg-transparent border text-white hover:bg-white hover:text-[var(--color-btn-dark)]">view Deals</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url('${homeSliderImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="overlay text-white py-30 px-20 bg-gradient-to-r from-[var(--color-btn-dark)]/95 to-[var(--color-btn-dark)]/40">
              <div className="container space-y-4">
                <h2 className=" text-2xl font-bold">
                  Fresh Product Delievered
                  <br />
                  to your door
                </h2>
                <p>Get 20% off for your first order </p>
                <div className="space-x-3">
                  <button className="btn text-[var(--color-btn-dark)] bg-white hover:bg-gray-100">Shop now</button>
                  <button className="btn bg-transparent border text-white hover:bg-white hover:text-[var(--color-btn-dark)]">view Deals</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
