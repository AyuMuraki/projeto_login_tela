import React from "react";
import { useFiltro } from "../contexts/FiltroContext";

const FiltroStatus: React.FC = () => {
  const { statusFilter, setStatusFilter } = useFiltro();

  return (
    <div className="p-4 border border-gray-300 rounded-md bg-white flex shadow-sm">
      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value as "Todos" | "Ativo" | "Encerrado")
        }
        className="border border-gray-400 rounded-md p-2" // Classes para a borda do select
      >
        <option value="Todos">Todos</option>
        <option value="Ativo">Ativo</option>
        <option value="Encerrado">Encerrado</option>
      </select>
    </div>
  );
};

export default FiltroStatus;
