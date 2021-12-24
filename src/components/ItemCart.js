import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import ItemCountMini from "./ItemCountMini";

const ItemCart = ({ item, cantidad }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
            <img src={item.imgUrl} width="50" height="50" alt={item.title} />
                {item.title} <ItemCountMini initial={cantidad} item={item}/> - Unit. $ { item.price } - SubTotal: ${cantidad * item.price} <Button variant="danger" onClick={ ()=>removeItem(item.id)}>X</Button>           
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemCart;
