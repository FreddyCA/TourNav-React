import PropTypes from "prop-types";
import styled from "styled-components";
import EmpresaInfo from "../components/EmpresaInfo";

const ServicesHeaderContent = styled.div`
  margin: 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 2rem;
  border: 3px solid #001f3f;
  border-radius: 15px;
`;

const ServicesHeader = ({ data }) => {
  return (
    <ServicesHeaderContent>
      <EmpresaInfo data={data} />
    </ServicesHeaderContent>
  );
};

ServicesHeader.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ServicesHeader;
