import { useState } from "react";
import styled, { css } from "styled-components";
import passwordOffImg from "../assets/png/passwordOff.png";
import passwordOnImg from "../assets/png/passwordOn.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const FormContactoStyle = styled.div`
  background-color: rgb(28, 30, 83);
  padding: 3rem;
  min-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: auto 0;
`;

const FormContactoText = styled.p`
  color: #ffffff;

  ${(props) =>
    props.$principal &&
    css`
      font-weight: 500;
      font-size: 1.75rem;
      margin: 0 auto;
    `}

  ${(props) =>
    props.$secondary &&
    css`
      font-weight: 300;
      font-size: 1rem;
    `}
  ${(props) =>
    props.$finally &&
    css`
      font-weight: 300;
      font-size: 0.9rem;
      margin: 0 auto;
    `}
`;

const FormCntStyle = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const FormCntInput = styled.input`
  color: rgb(255, 255, 255, 0.9);
  width: 100%;
  background-color: rgb(18, 20, 73);
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 2px solid rgb(48, 50, 103);
  font-size: 1rem;
  margin-bottom: 0.7rem;

  &:focus {
    outline: none;
    color: rgb(255, 255, 255);
    background-color: rgb(38, 40, 103);
    border: 2px solid transparent;
    border-bottom: 2px solid rgb(50, 40, 220);
  }
  &::placeholder {
    color: rgb(255, 255, 255, 0.75);
    font-size: 0.775rem;
  }
`;

const FormCntButton = styled.button`
  border: none;
  background-color: #fcd980;
  color: #282938;
  font-weight: 700;
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: #282333;
    border: 1px solid #fcd980;
    color: #fcd980;
  }
`;
const FormCntPassword = styled.label`
  display: flex;
`;
const FormCntPasswordContent = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(48, 50, 103);
  border-radius: 8px;
  margin-bottom: 0.7rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(38, 40, 103);
  }
`;
const FormCntPasswordButton = styled.img`
  width: 24px;
  height: 24px;
`;

const initialForm = {
  email: "",
  password: "",
};

const FormContacto = ({ dataUser }) => {
  const [formData, setFormData] = useState(initialForm);
  const [statusPassword, setStatusPassword] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setStatusPassword(!statusPassword);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      dataUser(user);
      console.log(formData);
    } catch (error) {
      console.log("error en form", error);
    }
  };

  return (
    <FormContactoStyle>
      <FormContactoText $principal>Iniciar Sesión</FormContactoText>
      <FormContactoText $secondary>
        Ante alguna duda mande un mensaje a: NnNnNnNn
      </FormContactoText>

      <FormCntStyle onSubmit={submitForm} autoComplete="on">
        <FormCntInput
          type="email"
          name="email"
          placeholder="Escribe tu Email"
          onChange={handleChange}
          value={formData.email}
          autoComplete="off"
        />

        <FormCntPassword>
          <FormCntInput
            type={statusPassword ? "password" : "text"}
            name="password"
            placeholder="Escribe una contraseña"
            onChange={handleChange}
            value={formData.password}
            autoComplete="off"
          />
          {statusPassword ? (
            <FormCntPasswordContent onClick={handleTogglePassword}>
              <FormCntPasswordButton
                src={passwordOnImg}
                alt="icon password on"
              />
            </FormCntPasswordContent>
          ) : (
            <FormCntPasswordContent onClick={handleTogglePassword}>
              <FormCntPasswordButton
                src={passwordOffImg}
                alt="icon password off"
              />
            </FormCntPasswordContent>
          )}
        </FormCntPassword>
        <FormCntButton type="submit">Enviar</FormCntButton>
      </FormCntStyle>
    </FormContactoStyle>
  );
};

import PropTypes from "prop-types";

FormContacto.propTypes = {
  dataUser: PropTypes.func.isRequired,
};

export default FormContacto;
