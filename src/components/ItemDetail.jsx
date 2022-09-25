import ItemCount from "./ItemCount"
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";    

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const context = useContext(CartContext);

    const onAdd = (qyt) => {
        alert("Has seleccionado" + " " + qyt + " items");
        setItemCount(qyt);
        context.addItem(item, qyt);
    }

    return(
        <>
        {
            item && item.image
            ?
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.price}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoContainer>
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;