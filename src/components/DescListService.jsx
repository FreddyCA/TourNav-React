import styled from "styled-components";
import PropTypes from "prop-types";

const DescListServiceStyle = styled.li`
  font-size: 1.115rem;
  color: var(--color-textPrimary);
  margin: 0.5rem;
`;

const DescListService = ({ text }) => {
  return <DescListServiceStyle>{text}</DescListServiceStyle>;
};

DescListService.propTypes = {
  text: PropTypes.string,
};

export default DescListService;
