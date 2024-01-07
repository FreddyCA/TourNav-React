import { useEffect, useState } from "react";
import { useIdioma } from "../context/contextIdioma";
import ServicesHeader from "../sections/ServicesHeader";
import { doc, getDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";
import Loading from "../components/Loading";

const Services = () => {
  const { idioma } = useIdioma();

  // console.log(idioma);

  const [data, setData] = useState(null);

  // console.log(data);

  // fetch solo para la informacion de la data un camppo
  // ademas de eliminar los ocal y session
  // fetch a cada part item collection de la aplicaión
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar si hay datos en sessionStorage
        const storedData = sessionStorage.getItem("miDataInf");

        if (storedData) {
          // Si hay datos en sessionStorage, usar esos datos
          setData(JSON.parse(storedData));
        } else if (idioma) {
          // Si no hay datos en sessionStorage, realizar la llamada de red
          const dataRef = doc(firebaseDB, `informacion_empresa/${idioma}`);
          const docSnapshot = await getDoc(dataRef);

          if (docSnapshot.exists()) {
            const newData = docSnapshot.data();
            setData(newData);

            // Guardar en sessionStorage para futura navegacion
            sessionStorage.setItem("miDataInf", JSON.stringify(newData));
          } else {
            console.log("No hay data disponible");
          }
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    // el fetch voolvero un hook, no guardarlo en el storage

    fetchData();
  }, [idioma]);
  return <>{data ? <ServicesHeader data={data} /> : <Loading />}</>;
};

export default Services;
