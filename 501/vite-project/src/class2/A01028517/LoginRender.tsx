import { createRoot } from "react-dom/client";
import Login from "./login";
import { StrictMode } from "react";

const handleLogin = (username: string, password: string) => {
  console.log(`Usuario: ${username}, Contraseña ${password}`);
}

createRoot(document.getElementById("LoginDiv")!).render(
    <StrictMode>
        <Login onLogin={handleLogin} />
    </StrictMode>
    );
