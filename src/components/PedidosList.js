import React, { Fragment, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import PedidoItem from "./PedidoItem";
import { getFirestore } from "../firebase/firebase";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading";

const PedidosList = () => {
  const [resultPedidos, setResultPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPedidos = () => {
    if(!localStorage.getItem("usuario")){
      setLoading(false);
      return false; 
    }
    const user = JSON.parse(localStorage.getItem("usuario"));
    setLoading(true);
    const db = getFirestore();
    const pedidosCollection = db.collection("orders").where("buyer.email", "==", user.email);    
    pedidosCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No se encontraron pedidos"); 
          setLoading(false);         
        }
        setResultPedidos(querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));    
  };

  useEffect(() => {
    getPedidos();
    console.log(resultPedidos);
  },[]);

  return (
    <Fragment>
      <Loading loading={loading} />
      {!loading && (
        <Fragment>
          <Container>
              <Row>
                {resultPedidos.map((pedido) => (
                  <PedidoItem
                    key={pedido.id}
                    item={pedido}                    
                  />
                ))}
              </Row>
            </Container>
    </Fragment>
      )}
  </Fragment>
  );
};

export default PedidosList;
