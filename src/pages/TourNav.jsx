import NavBarInitial from "../sections/NavBarInitial";
import styled from "styled-components";
import TextInitial from "../components/TextInitial";
import ButtonInitial from "../components/ButtonInitial";
import { useIdioma } from "../context/contextIdioma";
import { useEffect } from "react";

const TourNavContentStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 992px;
  margin: 0 auto;
  padding: 1rem 4rem;
  width: 100%;
  height: calc(100vh - 100px);
`;

const TourNavItemsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TourNav = () => {
  const { idioma } = useIdioma();
  console.log("torunav idioma", idioma);
  const data = [
    { id: "english", title: "English" },
    { id: "espaniol", title: "Español" },
  ];
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
  }, []);
  return (
    <>
      <NavBarInitial />
      <TourNavContentStyle>
        <TourNavItemsContent>
          <TextInitial text="Estás por ingresar a la guía de servicios de TourNav" />
          <TextInitial text="El mejor operador Turístico de Bolivia" />
          <TextInitial text="Por favor elija el idioma deseado" small />
        </TourNavItemsContent>
        <TourNavItemsContent>
          {data.map((item) => (
            <ButtonInitial key={item.id} itemData={item} />
          ))}
        </TourNavItemsContent>
      </TourNavContentStyle>
    </>
  );
};

export default TourNav;
