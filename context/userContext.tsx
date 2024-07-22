import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { UserContextType, User } from "@/lib/types";

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Function to handle login
  const loginUser: (user: User) => void = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
  };

  // Function to handle logout
  const logoutUser: () => void = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  useEffect(() => {
    const storedUser: User | null = JSON.parse(
      localStorage.getItem("currentUser") || "null"
    );
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const contextValue: UserContextType = {
    currentUser,
    loginUser,
    logoutUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export function useUserContext(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext cam only be accessed within UserProvider");
  }
  return context;
}

export default UserContext;
