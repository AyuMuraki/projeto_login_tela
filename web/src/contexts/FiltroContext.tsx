import React, { createContext, useState, useContext } from "react";

type StatusFilter = "Todos" | "Ativo" | "Encerrado";

interface FiltroContextType {
  statusFilter: StatusFilter;
  setStatusFilter: (status: StatusFilter) => void;
}

const FiltroContext = createContext<FiltroContextType | undefined>(undefined);

export const FiltroProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Todos");

  return (
    <FiltroContext.Provider value={{ statusFilter, setStatusFilter }}>
      {children}
    </FiltroContext.Provider>
  );
};

export const useFiltro = () => {
  const context = useContext(FiltroContext);
  if (!context) {
    throw new Error("useFiltro deve ser usado dentro de um FiltroProvider");
  }
  return context;
};
