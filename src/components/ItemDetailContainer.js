import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import productos from '../Data/Productos';
import { Container,Row } from "react-bootstrap";
import Swal from 'sweetalert';

const ItemDetailContainer = () => {

    const { productoId } = useParams();
    const [ResultProductos, setResultProductos] = useState([]);

    function onAdd(id, producto, cantidad) {
        Swal({
            title: 'Producto Agregado',
            text: `Se agregó ${cantidad}  ${producto} a su carrito`,
            icon: 'success',
            })
    }
    
    const getProducto = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (productos.length > 0) {
                    const productoDetalle = productos.filter((producto)=> producto.id === parseInt(productoId));
                    console.log(productoDetalle);
                    resolve(productoDetalle);
                } else {
                    reject('No se encontraron productos');
                }
            }, 2000);
        });

    useEffect(() => {
        getProducto().then(
            (result) => { setResultProductos(result); },
            (err) => { setResultProductos([]) }
        );
    }, [productoId]);

    return (
        <div className="div-img-datos">
            <Container>
                <Row>
                    {ResultProductos.map((producto) =>
                        <ItemDetail item={producto} onAdd={onAdd} initial={1} />
                    )}
                </Row>
            </Container>
        </div>
    );

}

export default ItemDetailContainer;