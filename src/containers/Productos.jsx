import Stock from "../components/Stock";

const Productos = () => {
    
    const report = () => {
       alert ("Has añadido productos al carrito");
    }

    return(
    <>
        <h1 class="titulo">Productos</h1>
        <hr></hr>
        <Stock 
        name="Nueces" 
        price="Precio: $350/kg"
        start={0} 
        report={report}/>
        <hr></hr>
        <Stock 
        name="Pasas de uva" 
        price="Precio: $200/kg" 
        start={0}
        report={report}/>
        <hr></hr>
        <Stock 
        name="Avena" 
        price="Precio: $250/kg"
        start={0} 
        report={report}/>
        <hr></hr>
        <Stock 
        name="Mani" 
        price="Precio: $300/kg"
        start={0} 
        report={report}/>
        <hr></hr>
        <Stock 
        name="Mermelada" 
        price="Precio: $500"
        start={0} 
        report={report}/>
        <hr></hr>
        <Stock 
        name="Galletas de arroz" 
        price="Precio: $300"
        start={0} 
        report={report}/>
        <hr></hr>
    </>
    );
}

export default Productos;