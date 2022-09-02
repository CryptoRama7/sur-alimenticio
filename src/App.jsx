import Stock from "./components/Stock";

const App = () => {
    return (
        <>
            <h1 class="titulo">Productos</h1>
            <hr></hr>
            <Stock name="Nueces" price="Precio: $350/kg"/>
            <hr></hr>
            <Stock name="Pasas de uva" price="Precio: $200/kg" />
            <hr></hr>
            <Stock name="Avena" price="Precio: $250/kg" />
            <hr></hr>
            <Stock name="Mani" price="Precio: $300/kg" />
            <hr></hr>
        </>
 );
}

export default App; 