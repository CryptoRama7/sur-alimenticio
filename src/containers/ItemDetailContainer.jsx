import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import customFetch from "../utils/customFetch";
import { dataFromBD } from '../utils/dataFromBD';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();
 
    useEffect(() => {
        customFetch(1500, dataFromBD.find(item => item.id == idItem))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, [idItem]);

    return(
            <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;