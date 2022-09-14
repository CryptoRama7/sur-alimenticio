import { useEffect, useState } from 'react';
import customFetch from "../utils/customFetch";
import ItemDetail from '../components/ItemDetail';
import dataFromBD from "../utils/dataFromBD";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, dataFromBD[3])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return(
            <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;