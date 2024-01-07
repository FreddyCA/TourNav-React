import { useLocation } from "react-router-dom";

const ExclusiveOffer = () => {
  const location = useLocation();
  const dataReceived = location.state.dataToSend;
  console.log(dataReceived);
  return (
    <div>ExclusiveOffer</div>
  )
}

export default ExclusiveOffer