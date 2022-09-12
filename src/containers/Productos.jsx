import Stock from "../components/Stock";
import { useEffect, useState } from 'react';
import customFetch from "../utils/customFetch";

const dataFromBD = [
    {   
        id: 1,
        name: "Nueces",
        price: "Precio: $350/kg",
    },
    {   
        id: 2,
        name: "Pasas de uva",
        price: "Precio: $200/kg",
    },
    {   
        id: 3,
        name: "Avena",
        price: "Precio: $250/kg",
    },
    {   
        id: 4,
        name: "Mani", 
        price: "Precio: $300/kg", 
    },
    {   
        id: 5,
        name: "Mermelada", 
        price: "Precio: $500",
    },
    {
        id: 6,
        name: "Galletas de arroz",
        price: "Precio: $300",
    }
];

const Productos = () => {
    
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
                <Stock
                    key={item.id}
                    name={item.title}
                    price={item.price}
                    start={0} 
                    report={report}/>
            ))
        }
        </>
    );
}

export default Productos;