import React, { useContext } from "react";
import ItemCart from "./ItemCart";
import { Container, Row, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { importeTotal,items,clearAllItems,finalizarCompra,getCarritoStorage } = useContext(CartContext);

  if(items.length<=0){
    return (
      <div>
        <h3>Carrito de compras</h3>
        <p>Tu carrito esta vacío</p>
        <NavLink to={ `/` }>Seguir Comprando</NavLink>
      </div>
    );
  }

  return (
    <div>
        <h3>Carrito de compras</h3>
        <Button variant="success" onClick={()=>finalizarCompra()}>Comprar</Button>{" "}
        <Button variant="danger" onClick={()=>clearAllItems()}>Vaciar Carrito</Button>
        <Container>
        <Row>
        {items.map((item)=>(
            <ItemCart key={item.item.id} item={item.item} cantidad={item.cantidad} />
           ))} 
           </Row>
      </Container>
      <br></br>
      <p><b>Total Compra: $ {importeTotal.toFixed(2)}</b></p>     
    </div>
  );
};

export default Cart;
