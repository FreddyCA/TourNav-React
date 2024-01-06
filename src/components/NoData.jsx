import styled from "styled-components";

const NoDataStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const NoDataTextStyle = styled.span`
  font-size: 2rem;
  color: var(--color--textPrimary);
`;

const NoData = () => {
  return (
    <NoDataStyle>
      <NoDataTextStyle>No Data</NoDataTextStyle>
    </NoDataStyle>
  );
};

export default NoData;
