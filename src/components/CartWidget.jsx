import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useCartContext } from "../context/CartContext";

const CartWidget = () => {  
const { totalProducts } = useCartContext();
    return (
         <Badge color="secondary" >
            <ShoppingCartOutlined />
            <span>{totalProducts() || ''}</span>
        </Badge>
    );
}

export default CartWidget;