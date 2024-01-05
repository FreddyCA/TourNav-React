import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const TextInitialStyle = styled.p`
max-width: 450px;
  color: var(--color--textPrimary);
  font-size: 2rem;
  ${(props) =>
    props.$small &&
    css`
    margin-top: 1rem;
      font-size: 1.2rem;
    `}
`;
const TextInitial = ({ text, small }) => {
  return <TextInitialStyle $small={small}>{text}</TextInitialStyle>;
};

TextInitial.propTypes = {
  text: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

export default TextInitial;
