import { useLocation } from "react-router-dom";
import BoxContent from "../components/BoxContent";
import styled from "styled-components";
import TitleItemService from "../components/TitleItemService";
import DescItemService from "../components/DescItemService";
import useItemCollectionData from "../hooks/useItemCollectionData";
import { useEffect, useState } from "react";

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
  const itemCollection = "mision_vision_historia";
  const dataCollection = useItemCollectionData(itemCollection);
  console.log("datacollection", dataCollection?.data_complete);
  console.log("datacollection", dataCollection);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (dataCollection) return setLoading(false);
  }, [dataCollection]);

  return (
    <BoxContent>
      {loading ? <h1>Cargando...</h1> : <h1>{dataCollection.mision.title}</h1>}

      {/* <MisionVisionHistoriaStyle>
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
      </MisionVisionHistoriaStyle> */}
    </BoxContent>
  );
};

export default MisionVisionHistoria;
