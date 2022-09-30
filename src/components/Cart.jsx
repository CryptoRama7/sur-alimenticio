import { useContext } from "react";
import { useCartContext } from "../context/CartContext";
import { Button } from '@mui/material';
import { DetailContainer, WrapperDetail, ImgContainerCart, ImageDetailCart, InfoContainerCart, TitleCart, PriceCart } from './styledComponents';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartList, removeItem, clearCart, totalPrice } = useCartContext();

    if (cartList.length === 0) {
        return (
            <>
                <p class="noItems">No items in the cart</p>
                <Link to="/" class="goToS">Go to shopping</Link>
            </>
        );
    }

    return (
        <>
             {
                cartList.map(item => <div><DetailContainer>
                    <WrapperDetail>
                        <ImgContainerCart>
                            <ImageDetailCart src={item.image}/>
                        </ImgContainerCart>
                        <InfoContainerCart>
                            <TitleCart>{item.name}</TitleCart>
                            <p>Cantidad: {item.qyt}</p>
                            <PriceCart> Precio unitario: ${item.price}</PriceCart>
                            <PriceCart> Subtotal: ${item.qyt * item.price}</PriceCart>
                            <Button variant="outlined" color="error" onClick={() => removeItem(item.id)}>Delete this product</Button>
                        </InfoContainerCart>
                    </WrapperDetail>
                </DetailContainer>
                </div>)
            }
            <p class="total">Total: ${totalPrice()}</p>
            <Button variant="contained" color="error" onClick={clearCart}>Delete all</Button>
        </>
    );
}

export default Cart; 