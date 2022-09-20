import ItemList from '../components/ItemList';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { dataFromBD } from '../utils/dataFromBD';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        customFetch(1500, dataFromBD.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId == idCategory;
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
    }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;