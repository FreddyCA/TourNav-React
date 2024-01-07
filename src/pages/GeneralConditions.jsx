import { useLocation } from "react-router-dom";

const GeneralConditions = () => {
  const location = useLocation();
  const dataReceived = location.state.dataToSend;
  console.log(dataReceived);
  return <div>GeneralConditions</div>;
};

export default GeneralConditions;
