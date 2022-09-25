import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const context = useContext(CartContext);

    return (
        <>
            <h2>Bienvenido al carrito de compras</h2>
            <button onClick={context.clear}>Delete all</button>
            {
                context.cartList.map(item => <li>{item.name} <button onClick={() => context.removeItem(item.id)}>Delete this product</button></li>)
            }
        </>
    );
}

export default Cart;