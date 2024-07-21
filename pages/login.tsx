import { useState } from "react";
import { Inter } from "next/font/google";
import LoginModal from "@/components/LoginModal";
import { useRouter } from "next/router";
import { loadUsersFromLocalStorage, addUser } from "@/utils/chatUtils";
import { useUserContext } from "@/context/userContext";
import { User } from "@/lib/types";

const inter = Inter({ subsets: ["latin"] });

const Login = (): JSX.Element => {
  const router = useRouter();
  const { loginUser } = useUserContext();

  const handleLogin = (name: string) => {
    const users: User[] = loadUsersFromLocalStorage();
    const existingUser = users.find((user) => user.name === name) as
      | User
      | undefined;

    if (existingUser) {
      loginUser(existingUser);
      router.push("/chat");
    } else {
      const newUser: User = {
        id: users.length + 1, // Incremental ID
        name: name,
        avatar: `https://randomuser.me/api/portraits/men/${
          users.length + 1
        }.jpg`, // Incremental avatar ID
      };

      addUser(newUser); // Add new user to localStorage

      loginUser(newUser);
      router.push("/chat");
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <LoginModal handleLogin={handleLogin} />
    </main>
  );
};


export default Login;