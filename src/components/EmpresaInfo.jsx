import styled from "styled-components";
import PropTypes from "prop-types";
import BoxServices from "./BoxServices";
import SubtitleServices from "./SubtitleServices";
import ButtonServices from "./ButtonServices";

const EmpresaInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`;

const EmpresaInfo = ({ data }) => {
  return (
    <BoxServices>
      <EmpresaInfoStyle>
        <SubtitleServices title={data.title} />

        <ButtonServices
          text={data.buttons[0]}
          path={"/tournav/services/mission-vision-history"}
        />

        <ButtonServices
          text={data.buttons[1]}
          path={"/tournav/services/current-data"}
        />
        <ButtonServices
          text={data.buttons[2]}
          path={"/tournav/services/exclusive-offer"}
        />

        <ButtonServices
          text={data.buttons[3]}
          path={"/tournav/services/commitments"}
        />

        <ButtonServices
          text={data.buttons[4]}
          path={"/tournav/services/general-conditions"}
        />
      </EmpresaInfoStyle>
    </BoxServices>
  );
};

EmpresaInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EmpresaInfo;
