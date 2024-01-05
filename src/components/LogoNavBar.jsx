import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const LogoNavBarStyle = styled.div`
width: 150px;
height: 40px;
display: flex;
align-items: center;
font-size: 2rem;
color: var(--color--textPrimary);
cursor: pointer;
`


const LogoNavBar = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/tournav")
  }
  return (
    <LogoNavBarStyle onClick={handleClick}>TourNav</LogoNavBarStyle>
  )
}

export default LogoNavBar