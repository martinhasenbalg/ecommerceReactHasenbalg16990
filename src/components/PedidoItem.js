import React, { useContext, useState } from "react";
// import { NavLink } from 'react-router-dom';
import { Card, Col } from "react-bootstrap";
// import ItemCount from "./ItemCount";
// import { CartContext } from "../context/CartContext";
// import Swal from 'sweetalert';

const PedidoItem = ({ item }) => {
    const [pedido] = useState(item);
    const fechaPedido = new Date(pedido.date.seconds * 1000).toLocaleString();
    return (
        <>
            <Col xs={6}>
                <Card>
                    <Card.Body>
                        <Card.Title><span className="h3">Pedido: {pedido.id} - <br></br>Fecha: {fechaPedido} </span></Card.Title>
                        <Card.Text>                            
                            <h3>Total: $ {pedido.total}</h3>
                            <hr />
                            <div className="div-img-datos">
                            <br></br>
                            <div id="div-count" style={{'display':'inline','textAlign':'center'}}>
                                <lu>
                            {pedido.items.map((item) => (
                                    <li>
                                       {item.title} x {item.cant} $ {item.price} = $ {item.cant * item.price}
                                    </li>
                            ))}
                                </lu>
                            </div>
                            <hr></hr>
                            </div>  
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default PedidoItem;