import { useEffect, useState } from 'react'; 

const Stock = (props) => {
    const [cant, setCant] = useState(0);

    const suma = () => {
        setCant(cant+1);
    }

    const resta = () => {
        setCant(cant-1);
    }

    return (
        <>
            <h5 class="card-title">{props.name}</h5>
            <p class="card-text">{props.price}</p>
            <button onClick={suma} type="button" class="btn btn-light">+</button> {cant}
            <button onClick={resta} type="button" class="btn btn-light">-</button>
            <button onClick={props.report} type="button" class="btn btn-light">Comprar</button>
        </>
    );
}

export default Stock;