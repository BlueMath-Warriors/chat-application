// initializeLocalStorage.ts
import { User } from "@/lib/types";
import { USERS, CHATS_DATA } from "@/constants/dummyData";

export const getUserFromLocalStorage = (): User | null => {
  const userJSON = localStorage.getItem("currentUser");
  return userJSON ? (JSON.parse(userJSON) as User) : null;
};

export const clearUserFromLocalStorage = (): void => {
  localStorage.removeItem("currentUser");
};

const initializeLocalStorage = (): void => {
  // Check if USERS already exist in localStorage
  if (!localStorage.getItem("USERS")) {
    localStorage.setItem("USERS", JSON.stringify(USERS));
  }

  // Check if CHATS_DATA already exist in localStorage
  if (!localStorage.getItem("CHATS_DATA")) {
    localStorage.setItem("CHATS_DATA", JSON.stringify(CHATS_DATA));
  }
};

export default initializeLocalStorage;
