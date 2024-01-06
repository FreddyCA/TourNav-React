import styled from "styled-components";
import PropTypes from "prop-types";
import BoxServices from "./BoxServices";
import SubtitleServices from "./SubtitleServices";
import ButtonServices from "./ButtonServices";
import { Link } from "react-router-dom";

const EmpresaInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`;

const EmpresaInfo = ({ data }) => {
  console.log(data);
  return (
    <BoxServices>
      <EmpresaInfoStyle>
        <SubtitleServices title={data.title} />
        <Link to={"/tournav/services/mission-vision-history"}>
          <ButtonServices text={data.buttons[0]} />
        </Link>
        <Link to={"/tournav/services/current-data"}>
          <ButtonServices text={data.buttons[1]} />
        </Link>

        <Link to={"/tournav/services/exclusive-offer"}>
          <ButtonServices text={data.buttons[2]} />
        </Link>

        <Link to={"/tournav/services/commitments"}>
          <ButtonServices text={data.buttons[3]} />
        </Link>

        <Link to={"/tournav/services/general-conditions"}>
          <ButtonServices text={data.buttons[4]} />
        </Link>
      </EmpresaInfoStyle>
    </BoxServices>
  );
};

EmpresaInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EmpresaInfo;
