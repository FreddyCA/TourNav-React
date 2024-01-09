import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { firebaseDB } from "../firebase/firebase";

const ItemUpdateAdminStyle = styled.div`
  display: flex;
  gap: 1rem;
`;

const InputItem = styled.input`
  border: none;
  padding: 0 1.5rem;
  border-radius: 8px;
  border: 2px solid rgb(48, 50, 103);
  font-size: 0.875rem;
  width: 50%;
  &:focus {
    outline: none;
  }
`;

const ButtonItem = styled.button`
  width: min-content;
  border: none;
  background-color: #fcd980;
  color: #282938;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #282333;
    color: #fcd980;
  }
`;

const ItemUpdateAdmin = ({ nameCampo, setStatus }) => {
  const [inputValue, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [statusButton, setStatusButton] = useState(true);

  const handleUpdate = async (newInput) => {
    try {
      const documentRef = doc(firebaseDB, "encabezado_empresa/data");
      const docSnap = await getDoc(documentRef);

      if (docSnap.exists()) {
        const updatedData = {
          [nameCampo]: newInput,
        };
        await updateDoc(documentRef, updatedData);
        setStatus(new Date().toString());
        setStatusButton(!statusButton);
        setInput("");
        console.log("cambia el estado");
      } else {
        console.log("No existe el documento con el ID proporcionado");
      }
    } catch (error) {
      console.error("Error al actualizar el documento:", error);
    }
  };

  const handleClick = () => {
    setStatusButton(!statusButton);
    setInput("");
  };

  return (
    <>
      {statusButton ? (
        <ButtonItem onClick={handleClick}>Modificar</ButtonItem>
      ) : (
        <ItemUpdateAdminStyle>
          <InputItem
            type="text"
            name="name"
            onChange={handleChange}
            value={inputValue}
            autoComplete="off"
            autoFocus
          />
          <ButtonItem
            onClick={(e) => {
              e.preventDefault();
              handleUpdate(inputValue);
            }}
          >
            Enviar
          </ButtonItem>
          <ButtonItem onClick={handleClick}>Cancelar</ButtonItem>
        </ItemUpdateAdminStyle>
      )}
    </>
  );
};

import PropTypes from "prop-types";

ItemUpdateAdmin.propTypes = {
  nameCampo: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default ItemUpdateAdmin;
