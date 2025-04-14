import React, { useState, useEffect } from "react";
import { useFiltro } from "../contexts/FiltroContext";
import processosData from "./processos.json";

interface Processo {
  numero: string;
  reclamante: string;
  reclamada: string;
  status: string;
  valorCausa: number;
  dataAjuizamento: string;
  cidade: string;
  uf: string;
  vara: string;
}

const TabelaProcessos: React.FC = () => {
  const { statusFilter } = useFiltro();
  const [processos, setProcessos] = useState<Processo[]>([]);

  useEffect(() => {
    setProcessos(processosData);
  }, []);

  const processosFiltrados =
    statusFilter === "Todos"
      ? processos
      : processos.filter((processo) => processo.status === statusFilter);

  return (
    <table className=" bg-gray-150 p-4 table-auto m-10 w-[80%] max-w-9x1 mx-auto rounded-xl overflow-x-scroll shadow-md">
      <thead>
        <tr>
          <th className="border px-4 py-2">Número</th>
          <th className="border px-4 py-2">Reclamante</th>
          <th className="border px-4 py-2">Reclamada</th>
          <th className="border px-4 py-2">Status</th>
          <th className="border px-4 py-2">Valor da Causa</th>
          <th className="border px-4 py-2">Data de Ajuizamento</th>
          <th className="border px-4 py-2">Cidade</th>
          <th className="border px-4 py-2">UF</th>
          <th className="border px-4 py-2">Vara</th>
        </tr>
      </thead>
      <tbody>
        {processosFiltrados.map((processo) => (
          <tr key={processo.numero}>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.numero}
            </td>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.reclamante}
            </td>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.reclamada}
            </td>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.status}
            </td>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.valorCausa}
            </td>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.dataAjuizamento}
            </td>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.cidade}
            </td>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.uf}
            </td>
            <td className="border px-4 py-2 font-semibold text-gray-800">
              {processo.vara}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaProcessos;
