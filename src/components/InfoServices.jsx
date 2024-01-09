import styled from "styled-components";
import TextTitleService from "./TextTitleService";
import { useEffect, useState } from "react";
import { firebaseDB } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const InfoServicesStyle = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

const InfoServicesContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const InfoServices = () => {
  const [data, setData] = useState(null);

  // console.log(data);
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
  }, []);

  return (
    <InfoServicesStyle>
      <InfoServicesContent>
        <TextTitleService text="Curier Adress:" />
        <TextTitleService text={data?.courier_address} textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="Email:" />
        <TextTitleService text={data?.email} textTitle />
        <TextTitleService text="Web:" />
        <TextTitleService text={data?.website} textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="Skype:" />
        <TextTitleService text={data?.skype} textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="Phone:" />
        <TextTitleService text={data?.phone} textTitle />
        <TextTitleService text="Fax:" />
        <TextTitleService text={data?.fax} textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="From Chile:" />
        <TextTitleService text={data?.from_chile} textTitle />
        <TextTitleService text="From USA:" />
        <TextTitleService text={data?.from_usa} textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="Toll Free:" />
        <TextTitleService text={data?.toll_free} textTitle />
      </InfoServicesContent>
    </InfoServicesStyle>
  );
};

export default InfoServices;
