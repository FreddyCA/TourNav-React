import styled from "styled-components";

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 400px);
`;

const LoadingTextStyle = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

const Loading = () => {
  return (
    <LoadingStyle>
      <LoadingTextStyle>Cargando...</LoadingTextStyle>
    </LoadingStyle>
  );
};

export default Loading;
