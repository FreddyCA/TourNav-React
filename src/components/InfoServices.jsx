import styled from "styled-components";
import TextTitleService from "./TextTitleService";

const InfoServicesStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoServicesContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const InfoServices = () => {
  return (
    <InfoServicesStyle>
      <InfoServicesContent>
        <TextTitleService text="Curier Adress:" />
        <TextTitleService text="Calle6 #100 Achumani" textTitle />
      </InfoServicesContent>
      <TextTitleService text="Nuestra Señora La Paz, Bolivia" textTitle />
      <InfoServicesContent>
        <TextTitleService text="Email:" />
        <TextTitleService text="tournav@gmail.com" textTitle />
        <TextTitleService text="Web" />
        <TextTitleService text="www.tournav.com" textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="Skype:" />
        <TextTitleService text="tournavelemntal" textTitle />
        <TextTitleService text="tournavelemntalnext" textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="Phone:" />
        <TextTitleService text="(591-2) 245-4545" textTitle />
        <TextTitleService text="Fax:" />
        <TextTitleService text="(591-2) 245-5454" textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="From Peru:" />
        <TextTitleService text="72727272" textTitle />
        <TextTitleService text="From USA:" />
        <TextTitleService text="(777) 787 8787" textTitle />
      </InfoServicesContent>
      <InfoServicesContent>
        <TextTitleService text="Toll Free:" />
        <TextTitleService text="800 10 TOURNAV" textTitle />
      </InfoServicesContent>
    </InfoServicesStyle>
  );
};

export default InfoServices;
