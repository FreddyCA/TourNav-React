import styled from "styled-components";
import PropTypes from "prop-types";

const BoxContentStyle = styled.div`
  border: 1px solid #001f3f;
  border-radius: 5px;
  padding: 1.5rem;
  max-width: 992px;
  margin: 1rem auto 4rem;
`;
const BoxContent = ({ children }) => {
  return <BoxContentStyle>{children}</BoxContentStyle>;
};

BoxContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BoxContent;
