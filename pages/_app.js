import "@/styles/globals.css";
import { useEffect } from "react";
import { UserProvider } from "@/context/userContext";
import initializeLocalStorage from "@/utils/localStorage";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
