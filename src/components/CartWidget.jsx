import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const CartWidget = () => {
    return (
        <Badge color="secondary">
        <div>
            <ShoppingCartOutlined />
        </div>
        </Badge>
    );
}

export default CartWidget