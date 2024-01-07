import styled from "styled-components";
import PropTypes from "prop-types";

const TitleItemServiceStyle = styled.h4`
  font-size: 1.3rem;
  font-style: italic;
  color: #008025;
`;

const TitleItemService = ({ text }) => {
  return <TitleItemServiceStyle>{text}</TitleItemServiceStyle>;
};

TitleItemService.propTypes = {
  text: PropTypes.string,
};

export default TitleItemService;
