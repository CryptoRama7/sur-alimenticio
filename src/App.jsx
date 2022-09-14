import ItemDetailContainer from "./containers/ItemDetailContainer";
import NavBar from "./components/NavBar";
import WelcomeText from "./components/ItemListContainer";

const App = () => {
    return (
        <>
            <NavBar/>
            <ItemDetailContainer />   
            <WelcomeText greeting="Tu dietetica de confianza"/>
        </>
 );
}

export default App; 