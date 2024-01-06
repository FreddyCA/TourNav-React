import styled from "styled-components";
import LogoNavBar from "../components/LogoNavBar";
import TitleServices from "../components/TitleServices";
import InfoServices from "../components/InfoServices";

const NavBarServicesStyle = styled.div`
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  gap: 1rem;
  border-bottom: 2px solid #363636;
`;

const NavBarServices = () => {
  return (
    <NavBarServicesStyle>
      <LogoNavBar />
      <TitleServices />
      <InfoServices />
    </NavBarServicesStyle>
  );
};

export default NavBarServices;
