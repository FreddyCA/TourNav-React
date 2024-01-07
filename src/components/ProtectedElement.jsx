import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedElement = ({ children }) => {
  const location = useLocation();
  const validLocation = location.state;
  if (!validLocation) return <Navigate to={"/tournav"}></Navigate>;
  return <>{children}</>;
};

ProtectedElement.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedElement;
