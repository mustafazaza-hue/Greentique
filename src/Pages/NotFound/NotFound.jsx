import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <div className="p-6 rounded-full shadow-md mb-4" style={{ backgroundColor: "#e6f4ea" }}>
        <FontAwesomeIcon 
          icon={faTriangleExclamation} 
          className="text-6xl"
          style={{ color: "#347928" }}
        />
      </div>

      <h1 className="text-5xl font-extrabold mb-2" style={{ color: "#347928" }}>
        404
      </h1>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <button 
        onClick={() => (window.location.href = "/")} 
        className="px-6 py-3 text-white rounded-2xl shadow-md hover:opacity-90 transition-all"
        style={{ backgroundColor: "#347928" }}
      >
        Back to Home
      </button>
    </div>
  );
}
