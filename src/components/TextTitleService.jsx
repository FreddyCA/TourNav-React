import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const TextTitleServiceStyle = styled.span`
  font-family: 300;
  font-size: 0.815rem;
  color: var(--color--textHighlight);

  ${(props) =>
    props.$textTitle &&
    css`
      color: blue;
    `}
`;

const TextTitleService = ({ text, textTitle }) => {
  return (
    <TextTitleServiceStyle $textTitle={textTitle}>{text}</TextTitleServiceStyle>
  );
};

TextTitleService.propTypes = {
  text: PropTypes.string.isRequired,
  textTitle: PropTypes.bool,
};

export default TextTitleService;
