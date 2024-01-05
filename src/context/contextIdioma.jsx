import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const IdiomaContext = createContext();

export const IdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState(() => {
    const storedIdioma = localStorage.getItem("idioma");
    return storedIdioma || "";
  });

  const value = {
    idioma,
    setIdioma,
  };

  return (
    <IdiomaContext.Provider value={value}>{children}</IdiomaContext.Provider>
  );
};

export const useIdioma = () => {
  return useContext(IdiomaContext);
};

IdiomaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
