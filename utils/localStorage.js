import { USERS, CHATS_DATA } from "@/constants/dummyData";
export const setUserInLocalStorage = (user) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const userJSON = localStorage.getItem("currentUser");
  return userJSON ? JSON.parse(userJSON) : null;
};

export const clearUserFromLocalStorage = () => {
  localStorage.removeItem("currentUser");
};

const initializeLocalStorage = () => {
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
