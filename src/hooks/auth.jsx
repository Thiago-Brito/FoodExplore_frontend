import { createContext, useContext, useEffect } from "react";
import { api } from "../Services/api";
import { useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplore:user", JSON.stringify(user));
      localStorage.setItem("@foodexplore:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possilvel realizar o login");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplore:token");
    localStorage.removeItem("@foodexplore:user");
    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplore:token");
    const user = localStorage.getItem("@foodexplore:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
