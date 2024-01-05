import styled from "styled-components"
import LogoNavBar from "../components/LogoNavBar"

const NavBarInitialStyle = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 4rem;
border-bottom: 2px solid #87CEEB;
`
const NavBarInitial = () => {
  return (
    <NavBarInitialStyle>
        <LogoNavBar />
    </NavBarInitialStyle>
  )
}

export default NavBarInitial