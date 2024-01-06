import PropTypes from "prop-types";
import styled from "styled-components";

const SubtitleServicesStyle = styled.h3`
  font-size: 1.2rem;
  color: var(--color--textPrimary);
  margin-bottom: 1rem;
`;
const SubtitleServices = ({ title }) => {
  return <SubtitleServicesStyle>{title}</SubtitleServicesStyle>;
};

SubtitleServices.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubtitleServices;
