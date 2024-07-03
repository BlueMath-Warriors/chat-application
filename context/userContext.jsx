import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();
export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Function to handle login
  const loginUser = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // Function to handle logout
  const logoutUser = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const contextValue = {
    currentUser,
    loginUser,
    logoutUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}

export default UserContext;
