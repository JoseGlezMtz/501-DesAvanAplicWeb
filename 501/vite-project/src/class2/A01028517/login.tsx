import React, { useState } from "react";

type LoginProps = {
  onLogin: (username: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validación opcional: asegura que los campos no estén vacíos
    if (!username || !password) {
      setError("Por favor completa todos los campos");
      return;
    }

    // Limpia errores previos
    setError("");

    // ✅ Aquí disparamos el alert que el test espera
    alert(`Usuario: ${username}\nContraseña: ${password}`);

    // ✅ Llamamos la función de login del prop
    onLogin(username, password);

    // Muestra popup de login exitoso
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Oculta el popup después de 2 segundos
  };

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            placeholder="Ingresa tu usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <button
          type="submit"
          style={{ width: "100%", padding: "10px", marginTop: "10px" }}
        >
          Iniciar sesión
        </button>

        {/* Popup visual al hacer login */}
        {showPopup && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "green",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Login exitoso
          </div>
        )}
      </form>

      {/* Botón para regresar al menú */}
      <a href="/public/A01028517/Menú.html">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#ff5722",
            color: "white",
            cursor: "pointer",
          }}
        >
          Regresar al menú
        </button>
      </a>
    </div>
  );
};

export default Login;
