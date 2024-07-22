import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { UserProvider } from "@/context/userContext";
import initializeLocalStorage from "@/utils/localStorage";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeLocalStorage();
  }, []);

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default App;
