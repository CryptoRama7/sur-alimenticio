const Stock = (props) => {
    return (
    <>
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.price}</p>
    </>
    );
}

export default Stock;