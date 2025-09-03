import { Link } from "react-router";
import imagePlaceholder from "../../assets/home-slider-1.png";
import {
  faArrowLeft,
  faArrowRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFetchBrands } from "../../hooks/useFetchBrands";
import Loading from "../../Components/Loading/Loading";

export default function Brands() {
  const { isLoading, brand, page, setPage, nextPage, previousPage, metadata, hasNext, hasPrevious} = useFetchBrands();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section>
        <div className="container">
          <div className="heading text-center py-12 space-y-3">
            <h2 className="font-bold text-3xl space-y-3">Our Partner Brands</h2>
            <p className="text-gray-500 text-lg">
              Discover quality products from our trusted brand partners. We've
              partnered with leading <br /> brands to bring you the best
              selection of fresh and organic products.
            </p>
          </div>
        </div>
        <div className="container bg-gray-50">
          <div className="featured-brands">
            <div className="heading py-14 ">
              <h3 className="font-bold text-xl">featured brands</h3>
            </div>
            <div className="brands pb-12 grid md:grid-cols-1 lg:grid-cols-3 gap-12">
              {brand.slice(6,9).map((item) => (
                <div key={item._id} className="brand-card rounded-lg bg-white col-span-1">
                  <div className="image relative">
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg"></div>
                    <div className="content-overlay absolute bottom-6 left-6 bg-transparent text-white">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-sm">{item.slug}</p>
                    </div>
                    <img
                      className="h-48 w-full object-cover rounded-t-lg"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="card-content p-3 space-y-4">
                    <p className="text-gray-500">
                      Bringing the freshest organic fruits and <br /> vegetables
                      from farm to table since 1995.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-md">
                        124 Products
                      </span>
                      <Link className="text-btn-dark  flex items-center gap-2">
                        View Products
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="all-brands py-8">
            <search className="relative inline-block mb-12">
              <input
                className="form-control bg-white min-w-60"
                placeholder="Search Orders..."
                type="text"
              />
              <FontAwesomeIcon
                className="absolute top-1/2 right-0 -translate-1/2 pr-1"
                icon={faMagnifyingGlass}
              />
            </search>
            <div className="brands grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {brand &&
                brand.map((item) => {
                  return (
                    <div key={item._id} className="brand-card col-span-1">
                      <img
                        className="w-full h-36 object-cover rounded-t-lg"
                        src={item.image}
                        alt=""
                      />
                      <div className="card-content bg-white p-3 space-y-2">
                        <h2 className="text-lg font-bold">{item.name}</h2>
                        <p className="text-md text-gray-500">{item.slug}</p>
                        <div className="card- flex items justify-between">
                          <span className="text-sm text-gray-500">
                            124 Products
                          </span>
                          <Link className="text-sm text-btn-dark">View</Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
<div className="arrows-buttons py-8 mx-auto w-fit">
  <ul className="flex items-center gap-1">
    {/* Previous Arrow */}
    <li className="size-6 text-center items-center border-2 border-gray-300 bg-white rounded-md">
      <button
        onClick={previousPage}
        disabled={!hasPrevious}
        className={`w-full h-full flex items-center justify-center ${!hasPrevious ? "opacity-50 cursor-not-allowed" : ""}`}
        aria-label="Previous page"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
    </li>
    {/* Page Numbers */}
    {Array.from({ length: metadata.numberOfPages || 1 }, (_, idx) => {
      const pageNum = idx + 1;
      return (
        <li
          key={pageNum}
          className={`size-6 text-center items-center border-2 border-gray-300 bg-white rounded-md ${
            pageNum === metadata.currentPage ? "bg-green-100 font-bold border-green-500" : ""
          }`}
        >
          <button
            onClick={() => setPage(pageNum)}
            disabled={pageNum === metadata.currentPage}
            className="w-full h-full flex items-center justify-center"
          >
            {pageNum}
          </button>
        </li>
      );
    })}
    {/* Next Arrow */}
    <li className="size-6 text-center items-center border-2 border-gray-300 bg-white rounded-md">
      <button
        onClick={nextPage}
        disabled={!hasNext}
        className={`w-full h-full flex items-center justify-center ${!hasNext ? "opacity-50 cursor-not-allowed" : ""}`}
        aria-label="Next page"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </li>
  </ul>
</div>
          </div>
        </div>
      </section>
    </>
  );
}
