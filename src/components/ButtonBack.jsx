import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonBackStyle = styled.button`
  padding: 0.8rem 2rem;
  background-color: #001f3f;
  color: #87ceeb;
  cursor: pointer;
  font-weight: 700;
  border: none;
  &:hover {
    background-color: #87ceeb;
    color: #001f3f;
    box-shadow: 0px 5px 4px #001f3f;
  }
`;

const ButtonBack = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  return <ButtonBackStyle onClick={handleClick}>Go Back</ButtonBackStyle>;
};

export default ButtonBack;
