import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
    return(
        <>
<div class="container">
  <div class="row">
    <div class="col-4">
        <img src={item.image} class="mani-image" alt="mani"/></div>
    <div class="col-6">
        <h2 class="card-title">{item.name}</h2>
        <h5 class="card-price">{item.price}</h5>
        <p class="card-description">{item.description}</p>
        <p class="stock">Productos disponibles: {item.stock}</p>
        <ItemCount className="compra" stock={item.stock}/></div>
  </div>
</div>
        </>
    );
    }

export default ItemDetail;