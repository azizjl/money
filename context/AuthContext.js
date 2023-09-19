import React, { createContext, useContext, useEffect, useState } from "react";
import { useSegments, useRouter } from "expo-router";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("aziiz");

  const login = (userData) => {
    // Logic to authenticate user and set user data
    setUser(userData);
  };

  const logout = () => {
    // Logic to log out user
    setUser(null);
  };

  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      //   router.replace("/home");
      router.replace("/login");
    } else if (user && inAuthGroup) {
      router.replace("/home");
    }
  }, [user, segments]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
