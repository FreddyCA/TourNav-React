import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const DescItemServiceStyle = styled.p`
  font-size: 1.115rem;
  color: var(--color-textPrimary);
  ${(props) =>
    props.$currentData &&
    css`
      &:before {
        content: "•";
        margin-right: 8px;
      }
    `}

  ${(props) =>
    props.$vision &&
    css`
      span:first-child {
        color: #00cd3b;
      }
    `}
`;

const DescItemService = ({ text, vision, currentData }) => {
  const words = text.split(" ");

  return (
    <DescItemServiceStyle $vision={vision} $currentData={currentData}>
      <span>{words.shift()}</span> {words.join(" ")}
    </DescItemServiceStyle>
  );
};

DescItemService.propTypes = {
  text: PropTypes.string,
  vision: PropTypes.bool,
  currentData: PropTypes.bool,
};

export default DescItemService;
