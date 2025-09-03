import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

export default function OfflineScreen({ children }) {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return children;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <div className="bg-red-100 p-6 rounded-full shadow-md mb-4">
          <FontAwesomeIcon icon={faWifi} className="text-red-500 text-5xl" />
        </div>

        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          You are offline
        </h2>
        <p className="text-gray-500 mb-6 max-w-md">
          Please check your internet connection and try again. Some features may
          not work until you’re back online.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-red-500 text-white rounded-2xl shadow-md hover:bg-red-600 transition-all"
        >
          Retry
        </button>
      </div>
    </>
  );
}
