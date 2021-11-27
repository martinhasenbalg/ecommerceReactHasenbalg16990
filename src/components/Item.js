import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Card, Col, Form, Button } from "react-bootstrap";
import Swal from 'sweetalert';


const Item = ({ stock, initial, onAdd, item }) => {
    const [count, setCount] = useState(parseInt(initial));
    const [disponible] = useState(parseInt(item.stock));
    const [producto] = useState(item);

    const sumar = () => {
        if (count < disponible) {
            setCount(count + 1);
        } else {
            Swal({
                title: 'No Disponible',
                text: 'Sin stock para la cantidad seleccionada',
                icon: 'error',
                
            })
        }
    };

    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            return false;
        }
    };

    return (
        <>
            <Col xs={3} key={producto.id}>
                <Card>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                            <Link to={ `/producto/${producto.id}` }><span className="h3">{producto.title}</span></Link>
                            <p>{producto.description}</p>
                            <p>Precio: $ {producto.price}</p>
                            <hr />
                            <div className="div-img-datos">
                            <Link to={ `/producto/${producto.id}` }>
                            <img src={producto.imgUrl} width="250" height="250" />
                            </Link>
                            <br></br>
                            <Button variant="danger" className="button" size="sm" onClick={restar}>-</Button>
                            <Form.Control type="text" className="input" size="sm" value={count} readOnly="readonly" min="0" />
                            <Button variant="success" className="button" size="sm" onClick={sumar}>+</Button>
                            <hr></hr>
                            </div>
                            <div className="d-grid gap-2">
                                <Button variant="primary" onClick={() => onAdd(producto.id,producto.title, count)}>Agregar al carrito</Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Item;
