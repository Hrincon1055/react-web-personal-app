import { useState, useEffect, createContext } from "react";
import {
  getAccessTokenApi,
  getRefreshTokenApi,
  refreshAccessTokenApi,
  logout,
} from "../api/auth";
import jwtDecode from "jwt-decode";
export const AuthContext = createContext();

export default function AuthProvider(props) {
  // props
  const { children } = props;
  // state
  const [user, setUser] = useState({
    user: null,
    isLoading: true,
  });
  // effect
  useEffect(() => {
    checkUserLogin(setUser);
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
// funciones internas
function checkUserLogin(setUser) {
  const accessToken = getAccessTokenApi();

  if (!accessToken) {
    const refreshToken = getRefreshTokenApi();
    if (!refreshToken) {
      logout();
      setUser({
        user: null,
        isLoading: false,
      });
    }
    refreshAccessTokenApi(refreshToken);
  } else {
    setUser({
      isLoading: false,
      user: jwtDecode(accessToken),
    });
  }
}
