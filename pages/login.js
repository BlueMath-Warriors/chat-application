import { useState } from "react";
import { Inter } from "next/font/google";
import LoginModal from "@/components/LoginModal";
import { useRouter } from "next/router";
import { loadUsersFromLocalStorage, addUser } from "@/utils/chatUtils";
import { useUserContext } from "@/context/userContext";
const inter = Inter({ subsets: ["latin"] });

export default function Login() {

  const router = useRouter();
  const { loginUser } = useUserContext();
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (name) => {
    const users = loadUsersFromLocalStorage();
    const existingUser = users.find((user) => user.name === name);

    if (existingUser) {
      loginUser(existingUser);
      setShowLogin(false);
      router.push("/chat");
    } else {
      const newUser = {
        id: users.length + 1, // Incremental ID
        name: name,
        avatar: `https://randomuser.me/api/portraits/men/${
          users.length + 1
        }.jpg`, // Incremental avatar ID
      };

      addUser(newUser); // Add new user to localStorage

      loginUser(newUser);
      setShowLogin(false);
      router.push("/chat");
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <LoginModal
        show={showLogin}
        onHide={() => {
          setShowLogin(false);
        }}
        handleLogin={handleLogin}
      />
    </main>
  );
}
