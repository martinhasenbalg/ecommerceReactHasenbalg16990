import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
// import productos from "../Data/Productos";
import { Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import { getFirestore } from "../firebase/firebase";

const ItemDetailContainer = () => {
  const { productoId } = useParams();
  const [ResultProductos, setResultProductos] = useState([]);
  const [loading, setloading] = useState(true);

  // const getProducto = () =>
  //   new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       setResultProductos([]);
  //       if (productos.length > 0) {
  //         const productoDetalle = productos.filter(
  //           (producto) => producto.id === parseInt(productoId)
  //         );
  //         resolve(productoDetalle);
  //       } else {
  //         reject("No se encontraron productos");
  //       }
  //     }, 2000);
  //   });

  const getProducto = () => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    if (productoId.length > 0) {
      const productoDetalle = itemCollection.doc(productoId);
      productoDetalle
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No se encontraron productos");
          }
          setResultProductos([
            {
              id:querySnapshot.id,
              ...querySnapshot.data(),
            }
          ]);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  // useEffect(() => {
  //   setloading(true);
  //   getProducto().then(
  //     (result) => {
  //       setloading(false);
  //       setResultProductos(result);
  //     },
  //     (err) => {
  //       setloading(false);
  //       setResultProductos([]);
  //     }
  //   );
  // }, [productoId]);

  useEffect(() => {
    getProducto();
  }, [productoId]);

  return (
    <Fragment>
      <Loading loading={loading} />
      {!loading && (
        <Fragment>
          <div className="div-img-datos">
            <Container>
              <Row>
                {ResultProductos.map((producto) => (
                  <ItemDetail key={producto.id} item={producto} />
                ))}
              </Row>
            </Container>
          </div>
        </Fragment>
      )}
    </Fragment>
  );

};

export default ItemDetailContainer;
