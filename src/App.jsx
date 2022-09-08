import Productos from "./containers/Productos";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
    return (
        <>
            <NavBar/>
            <Productos />   
            <ItemListContainer greeting="Tu dietetica de confianza"/>
        </>
 );
}

export default App; 