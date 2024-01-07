import { useLocation } from "react-router-dom";
import BoxContent from "../components/BoxContent";
import styled from "styled-components";
import TitleItemService from "../components/TitleItemService";
import DescItemService from "../components/DescItemService";

const MisionVisionHistoriaStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const MVHItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MisionVisionHistoria = () => {
  const location = useLocation();
  const dataReceived = location.state.dataToSend;
  
  return (
    <BoxContent>
      <MisionVisionHistoriaStyle>
        {dataReceived.map((item, index) =>
          index === 1 ? (
            <MVHItemContent key={index}>
              <TitleItemService text={item.title} />
              <DescItemService text={item.desc.externa} vision />
              <DescItemService text={item.desc.interna} vision />
            </MVHItemContent>
          ) : (
            <MVHItemContent key={index}>
              <TitleItemService text={item.title} />
              <DescItemService text={item.desc} />
            </MVHItemContent>
          )
        )}
      </MisionVisionHistoriaStyle>
    </BoxContent>
  );
};

export default MisionVisionHistoria;
