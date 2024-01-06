import styled from "styled-components";
import PropTypes from "prop-types";

const BoxServicesStyle = styled.div`
  padding: 1rem;
  margin: 0 auto;
  background-color: skyblue;
  width: 100%;
`;
const BoxServices = ({ children }) => {
  return <BoxServicesStyle>{children}</BoxServicesStyle>;
};

BoxServices.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxServices;
