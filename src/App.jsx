import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart"
import CartProvider from "./context/CartContext"

const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:idCategory' element={<ItemListContainer/>} />
                <Route path='/item/:idItem' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            </CartProvider>
        </BrowserRouter>
    );
}
    
export default App;