import React, { useState,useContext } from "react";
import { Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown,faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";


const ItemCountMini = ({ initial, item }) => {
  const [count, setCount] = useState(parseInt(initial));
  const [disponible] = useState(parseInt(item.stock));
  const { addItem, removeItem, removeItemCant } = useContext(CartContext);
 
  const sumar = () => {
    if (count < disponible) {
      setCount(count + 1);
      addItem(item,1);      
    } else {
      Swal({
        title: 'Disponible',
        text: 'Ha superado la cantidad disponible',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
      removeItemCant(item.id,1);
    } else {
      removeItem(item.id);
      return false;
    }
  };

  return (
    <>
      <FontAwesomeIcon icon={ faAngleDoubleDown } onClick={sumar} size={'1x'}/>
      <Form.Control type="text" className="linea input" size="sm" value={count} readOnly="readonly" min="0" />
      <FontAwesomeIcon icon={ faAngleDoubleUp } onClick={restar} size={'1x'}/>
    </>
  );
};

export default ItemCountMini;
