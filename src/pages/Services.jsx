import { useIdioma } from "../context/contextIdioma";

const Services = () => {
  const { idioma } = useIdioma();
  
  console.log(idioma);
  return <div>Services</div>;
};

export default Services;
