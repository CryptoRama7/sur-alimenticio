import Stock from "./components/Stock";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
    return (
        <>
            <NavBar/>
            <h1 class="titulo">Productos</h1>
            <hr></hr>
            <Stock name="Nueces" price="Precio: $350/kg" />
            <Stock name="Pasas de uva" price="Precio: $200/kg" />
            <Stock name="Avena" price="Precio: $250/kg" />
            <Stock name="Mani" price="Precio: $300/kg" />
            <Stock name="Mermelada" price="Precio: $500" />
            <Stock name="Galletas de arroz" price="Precio: $300" />
            <hr></hr>
            <ItemListContainer greeting="Tu dietetica de confianza"/>
        </>
 );
}

export default App; 