import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "../pages/Login";
import Processos from "../pages/Processos";
import { AuthProvider } from "../contexts/AuthContext";
import { FiltroProvider } from "../contexts/FiltroContext";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <FiltroProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/processos" element={<Processos />} />
          </Routes>
        </FiltroProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
