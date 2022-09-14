import ItemCount from "../components/ItemCount";
import { useEffect, useState } from 'react';
import customFetch from "../utils/customFetch";
import dataFromBD from "../utils/dataFromBD";

const ItemListContainer = () => {
    
    const [data, setData] = useState([]);
     
    useEffect(() => {
        customFetch(2000, dataFromBD)
        .then(datos => setData(dataFromBD))
        .catch(err => console.log(err))
    }, []);

    const report = () => {
       alert ("Has añadido productos al carrito");
    }

    return(
        <>
        {
            data.map(item => (
                <ItemCount
                    key={item.id}
                    name={item.title}
                    price={item.price}
                    report={report}/>
            ))
        }
        </>
    );
}

export default ItemListContainer;