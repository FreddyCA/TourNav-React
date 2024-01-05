import { Navigate } from "react-router-dom";
import { useIdioma } from "../context/contextIdioma";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { idioma } = useIdioma();

  if (!idioma) return <Navigate to={"/tournav"} />;

  return <>{children}</>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
