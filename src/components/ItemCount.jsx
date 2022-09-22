import { useState, useEffect} from 'react'; 
import { Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { ProductAmountContainer, ProductAmount } from './styledComponents';

const ItemCount = ({ stock = 0, initial = -1, onAdd }) => {

    const [count, setCount] = useState(0);
 
    useEffect(() => {
        setCount(initial);
    }, []);

    const suma = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const resta = () => {

        setCount(count-1)

        if (count === 0) {
            setCount(count);
        }
    }

    return (
        <ProductAmountContainer>
            <Button variant="text" onClick={suma}><Add /></Button>
            <ProductAmount>{count}</ProductAmount>
            <Button variant="text" onClick={resta}><Remove /></Button>
            {
                stock && count
                ? <Button variant="contained" color="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                : <Button variant="contained" disabled>Agregar al carrito</Button>
            }
        </ProductAmountContainer>
    );
}

export default ItemCount;