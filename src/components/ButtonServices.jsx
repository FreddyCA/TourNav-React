import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ButtonServicesStyle = styled.button`
  border: none;
  font-size: 1rem;
  width: 300px;
  padding: 0.8rem 1rem;
  background-color: #98ff98;
  font-weight: 700;
  color: #228b22;
  cursor: pointer;
  &:hover {
    background-color: #2e8b57;
    color: #98ff98;
  }
`;

const ButtonServices = ({ text, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <ButtonServicesStyle onClick={handleClick}>{text}</ButtonServicesStyle>
  );
};

ButtonServices.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default ButtonServices;
