import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="  bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-amber-50 font-medium flex flex-col">
        {user && (
          <span className="text-lg">
            {user.nome} {user.sobrenome}
          </span>
        )}
        <span className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold text-amber-50">
          Lista de Processos
        </span>
      </div>

      <button
        className="font-medium bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition ease-linear"
        onClick={handleLogout}
      >
        Sair
      </button>
    </header>
  );
};
export default Header;
