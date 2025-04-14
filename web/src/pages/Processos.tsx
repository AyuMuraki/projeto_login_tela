import React from "react";
import Header from "../components/Header";
import FiltroStatus from "../components/FiltroStatus";
import TabelaProcessos from "../components/TabelaProcessos";

const Processos: React.FC = () => {
  return (
    <div>
      <Header />
      <FiltroStatus />
      <TabelaProcessos />
    </div>
  );
};

export default Processos;
