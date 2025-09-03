import { Children, createContext, useEffect, useState } from "react";
import { verifyToken } from "../../../Pages/services/verifyToken";
import { apiClient } from "../../../Pages/services/apiClient";

export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userInfo, setUserInfo]=useState(null)


  useEffect(() => {
    const solveAsync = async () => {
      try {
        const response = await verifyToken();
        if(response.success){
            setIsAuthenticated(true)
            setUserInfo(response.data.decoded)
        }
       
      } catch (error) {
        console.log(error);
      }
    };
    solveAsync();
  }, []);

  function logOut() {
    setToken(null);
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }


  

  return (
    <>
      <AuthContext.Provider value={{ token, setToken, logOut, isAuthenticated, userInfo,  }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}
