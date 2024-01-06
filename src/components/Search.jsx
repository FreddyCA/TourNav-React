import { useState } from "react";
import styled from "styled-components";
import iconSearch from "../assets/svg/iconSearch.svg";

const SearchStyle = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
`;
const SearchTitle = styled.span`
  font-size: 1rem;
  color: var(--color--textPrimary);
  margin-right: 0.5rem;
  font-weight: 700;
`;

const SearchInput = styled.input`
  padding: 0.2rem 0.5rem;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  color: var(--color--textPrimary);
  &:focus {
    outline: none;
    border: none;
  }
`;

const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const SearchForm = styled.form`
  background-color: #c6ebfb;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-left: 1px solid #467196;
  padding: 0 0 0 0.2rem;
  &:hover {
    background-color: #5e9bc4;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:focus {
    outline: none;
    background-color: #5e9bc4;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const Search = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchStyle>
      <SearchTitle>Buscar servicio</SearchTitle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput type="text" value={text} onChange={handleChange} />
        <SearchButton type="submit">
          <SearchIcon src={iconSearch} alt="icon search" />
        </SearchButton>
      </SearchForm>
    </SearchStyle>
  );
};

export default Search;
