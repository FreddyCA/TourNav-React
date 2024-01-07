import { useEffect, useState } from "react";
import { useIdioma } from "../context/contextIdioma";
import { doc, onSnapshot } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const useItemCollectionData = (itemCollection) => {
  const { idioma } = useIdioma();
  const navigate = useNavigate();
  const [dataItem, setDataItem] = useState(null);

  useEffect(() => {
    if (!idioma) return navigate("/tournav");
    const dataRef = doc(
      firebaseDB,
      `informacion_empresa/${idioma}/${itemCollection}/data`
    );

    const unsubscribe = onSnapshot(dataRef, (doc) => {
      if (doc.exists()) {
        setDataItem(doc.data());
      } else {
        setDataItem(null);
      }
    });

    return () => unsubscribe();
  }, [idioma, itemCollection, navigate]);
  return dataItem;
};

export default useItemCollectionData;
