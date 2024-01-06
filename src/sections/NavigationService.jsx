import styled from "styled-components";
import ButtonHomeServices from "../components/ButtonHomeServices";
import Search from "../components/Search";
import ButtonBack from "../components/ButtonBack";

const NavigationServiceStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  align-items: center;
  height: 100px;
`;
const NavBarServicesContent = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const NavigationService = () => {
  return (
    <NavigationServiceStyle>
      <ButtonHomeServices />
      <NavBarServicesContent>
        <Search />
        <ButtonBack />
      </NavBarServicesContent>
    </NavigationServiceStyle>
  );
};

export default NavigationService;
