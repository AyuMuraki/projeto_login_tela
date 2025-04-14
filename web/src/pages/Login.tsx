import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    if (email === "karoline@exemplo.com" && password === "adm123") {
      login({ nome, sobrenome, email });
      navigate("/processos");
      setError(null);
    } else {
      setError("Email ou senha incorretos.");
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/wallpaper.png')" }}
    >
      <div className="bg-gray-100 border p-4 rounded">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Login para Consulta de Processos
        </h1>

        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Nome"
            className="w-full border rounded p-2 mb-2"
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="w-full border rounded p-2 mb-2"
            onChange={(e) => setSobrenome(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2 mb-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full border rounded p-2 mb-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-blue-800 transition ease-linear"
            onClick={handleLogin}
          >
            Login
          </button>
          {error && (
            <p className="text-red-500 mt-2 font-semibold antialiased">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
