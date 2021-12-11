import React, { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Card, Col, Button } from "react-bootstrap";
import Swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = ({ item }) => {   
    const [producto] = useState(item); 
    const { addItem } = useContext(CartContext);
    
    function onAdd(producto, cantidad) {
        // console.log('itemDetail',producto);
        addItem(producto,cantidad);             
        Swal({
            title: 'Item Agregado',
            text: `Se agregaron ${cantidad} unid. de ${producto.title} a su carrito`,
            icon: 'success',
            
        });
        document.getElementById('div-count').style.display = 'none'
        document.getElementById('div-terminar-compra').style.display = 'inline'
    }

    return (
        <>
        <Col xs={12}>
                <Card>
                    <Card.Body>
                        <Card.Title>Información del Producto</Card.Title>
                        <Card.Text>
                            <span className="h3">{producto.title}</span>
                            <p>Descripción: {producto.description}</p>
                            <hr />
                            <p>Precio: $ {producto.price}</p>
                            <hr />
                            <div className="div-img-datos">
                            <img src={producto.imgUrl} width="200" height="200" alt={producto.title} />
                            <br></br>
                            <div id="div-count" style={{'display':'inline','textAlign':'center'}}>
                                <ItemCount initial={1} item={producto} onAdd={onAdd}/>
                            </div>
                            <div id="div-terminar-compra" style={{'display':'none'}}>
                            <hr></hr>
                                <Button variant="warning"><NavLink to={ `/` }><FontAwesomeIcon icon={faShoppingCart} />Seguir Comprando</NavLink></Button>
                                <br></br><br></br>
                                <NavLink to={'/carrito'}>Finalizar Compra</NavLink>
                                <br></br>
                            </div>
                            <hr></hr>
                            </div>                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>);

}

export default ItemDetail;