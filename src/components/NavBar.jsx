import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "white"}}><Logo>Sur Alimenticio</Logo></Link>
                </Left>
                <Center>
                    <Link to='/category/1' style={{textDecoration: "none", color: "white"}}><MenuItem>Alimentos Sanos</MenuItem></Link>
                    <Link to='/category/2' style={{textDecoration: "none", color: "white"}}><MenuItem>Dulces</MenuItem></Link>
                    <Link to='/category/3' style={{textDecoration: "none", color: "white"}}><MenuItem>Bebidas</MenuItem></Link>                    
                </Center>
                <Right>
                    <MenuItem>Registrarse</MenuItem>
                    <MenuItem>Ingresar</MenuItem>
                    <MenuItem>
                        <Link to='/cart' style={{textDecoration: "none"}}><CartWidget></CartWidget></Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;