import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonServicesStyle = styled.button`
  border: none;
  font-size: 1rem;
  width: 300px;
  padding: 0.8rem 1rem;
  background-color: #98FF98;
  font-weight: 700;
  color: #228B22;
  cursor: pointer;
  &:hover {
    background-color: #2E8B57;
    color: #98FF98;
  }
`;

const ButtonServices = ({ text }) => {
    
  return <ButtonServicesStyle>{text}</ButtonServicesStyle>;
};

ButtonServices.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonServices;
