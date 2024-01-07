import { useLocation } from "react-router-dom";
import { useIdioma } from "../context/contextIdioma";
import BoxContent from "../components/BoxContent";
import TitleItemService from "../components/TitleItemService";
import styled from "styled-components";
import DescListService from "../components/DescListService";

const CurrentDataStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;


const CurrentData = () => {
  const { idioma } = useIdioma();
  const location = useLocation();
  const dataReceived = location.state.dataToSend;
  return (
    <>
      {idioma === "espaniol" && (
        <BoxContent>
          <CurrentDataStyle>
            <TitleItemService text={"DATOS ACTUALES"} />
            <ul>
              {dataReceived.map((item, index) => (
                <DescListService key={index} text={item} />
              ))}
            </ul>
          </CurrentDataStyle>
        </BoxContent>
      )}
      {idioma === "english" && <h1>ingles</h1>}
    </>
  );
};

export default CurrentData;
