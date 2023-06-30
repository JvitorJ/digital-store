import Ways from "./services"
import { useEffect } from "react";
import { createContext } from "react"
import { useState } from "react";
import FinalizarCompra from "./pages/FinalizarCompra";

export const AuthContext = createContext(null);

const App = () => {

  const [isLoggeg, setIsLoggeg] = useState(false);

  function checkLogin(){
    setIsLoggeg(JSON.parse(sessionStorage.getItem('isLoggeg')) || true);
  }

  useEffect(() => {
    checkLogin();
  }, [])

  return (
    <>
      <FinalizarCompra></FinalizarCompra>
    </>
  )
}

export default App
