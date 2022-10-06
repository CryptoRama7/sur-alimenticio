import firestoreFetch from "../utils/firestoreFetch"; 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../components/ItemList";

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setDatos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
            <ItemList items={datos} />
    )
}

export default ItemListContainer;