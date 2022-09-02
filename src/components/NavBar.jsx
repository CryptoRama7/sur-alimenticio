import '../App.css'
// import { AppBar } from "@material-ui/core";
// import CartWidget from './CartWidget';
// import { Wrapper, Logo, MenuItem, Left, Center, Right } from './StyledComponents';

const Nav = () => {
    return (
    <header>
        <nav>
            <h1 class="titulo-nav">Sur Alimenticio</h1>
            <a class="mision" href="">Mision</a>
            <a class="sobre-nosotros" href="">Sobre Nosotros</a>
            <a class="locales" href="">Locales</a>
        </nav>
    </header>
        // <AppBar position="relative">
        //     <Wrapper>
        //         <Left>
        //             <Logo></Logo>
        //         </Left>
        //         <Center>
        //             <MenuItem>CATEGORIA 1</MenuItem>
        //             <MenuItem>CATEGORIA 2</MenuItem>
        //             <MenuItem>CATEGORIA 3</MenuItem>
        //         </Center>
        //         <Right>
        //             <MenuItem>REGISTER</MenuItem>
        //             <MenuItem>SING IN</MenuItem>
        //             <MenuItem><CartWidget /></MenuItem>
        //         </Right>
        //     </Wrapper>
        // </AppBar>
    );
}

export default Nav;