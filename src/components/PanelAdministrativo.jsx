import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firebaseDB } from "../firebase/firebase";
import styled from "styled-components";
import InfoServices from "./InfoServices";
import ItemUpdateAdmin from "./ItemUpdateAdmin";
import TextTitleService from "./TextTitleService";

const PanelAdministrativoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid #231553;
`;

const TitleItemContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PanelAdministrativo = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = doc(firebaseDB, "encabezado_empresa/data");
        const docSnapshot = await getDoc(dataRef);
        console.log("peticion de informacion");

        if (docSnapshot.exists()) {
          const newData = docSnapshot.data();
          setData(newData);
        }
      } catch (error) {
        console.log("error info services:", error);
      }
    };

    fetchData();
  }, [status]);

  return (
    <PanelAdministrativoStyle>
      <h1>TourNav</h1>
      <InfoServices />

      <ItemContent>
        <TitleItemContent>
          <TextTitleService text="Curier Adress:" />
          <TextTitleService text={data?.courier_address} textTitle />
        </TitleItemContent>
        <ItemUpdateAdmin nameCampo="courier_address" setStatus={setStatus} />
      </ItemContent>

      <ItemContent>
        <TitleItemContent>
          <TextTitleService text="Email:" />
          <TextTitleService text={data?.email} textTitle />
        </TitleItemContent>
        <ItemUpdateAdmin nameCampo="email" setStatus={setStatus} />
      </ItemContent>
    </PanelAdministrativoStyle>
  );
};

export default PanelAdministrativo;
