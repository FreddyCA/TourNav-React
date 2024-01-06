import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonHomeServicesStyle = styled.button`
  padding: 0.8rem 2rem;
  background-color: #001F3F;
  color: #87ceeb;
  cursor: pointer;
  font-weight: 700;
  border: none;
  &:hover {
    background-color: #87ceeb;
    color: #001F3F;
    box-shadow: 0px 5px 4px #001F3F;
  }
`;

const ButtonHomeServices = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tournav/services");
  };
  return (
    <ButtonHomeServicesStyle onClick={handleClick}>
      Home
    </ButtonHomeServicesStyle>
  );
};

export default ButtonHomeServices;
