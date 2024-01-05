import styled from "styled-components";
import PropTypes from "prop-types";
import { useIdioma } from "../context/contextIdioma";
import { Link } from "react-router-dom";

const ButtonInitialStyle = styled.button`
  padding: 1rem 2.5rem;
  background-color: #004080;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  border: 2px solid transparent;

  cursor: pointer;

  &:hover {
    background-color: #87ceeb;
    border: 2px solid #004080;
    box-shadow: 2px 5px 10px #004080;
    color: #004080;
  }
`;
const ButtonInitial = ({ itemData }) => {
  const { setIdioma } = useIdioma();
  const handleClick = () => {
    localStorage.setItem("idioma", itemData.id);
    setIdioma(itemData.id);
  };
  return (
    <Link to={"/tournav/services"} style={{ textDecoration: "none" }}>
      <ButtonInitialStyle onClick={handleClick}>
        {itemData.title}
      </ButtonInitialStyle>
    </Link>
  );
};

ButtonInitial.propTypes = {
  itemData: PropTypes.object.isRequired,
};

export default ButtonInitial;
