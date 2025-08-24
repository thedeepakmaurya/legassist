"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currUser, setCurrUser] = useState({});

  useEffect(() => {
    const signUpData = JSON.parse(localStorage.getItem("signUp")) || [];
    setUsers(signUpData);
  }, []);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    setCurrUser(loggedInUser);
  }, []);

  return (
    <AuthContext.Provider value={{ users, setUsers, currUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
