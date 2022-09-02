import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting = "Tu dietetica por preferencia"/> 
        </div>
    );
}

export default Home;