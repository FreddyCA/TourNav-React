import { useLocation } from "react-router-dom";

const Commitments = () => {
  const location = useLocation();
  const dataReceived = location.state.dataToSend;
  console.log(dataReceived);
  return <div>Commitments</div>;
};

export default Commitments;
