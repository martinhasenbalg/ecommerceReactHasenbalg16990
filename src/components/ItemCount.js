import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Swal from 'sweetalert';

const ItemCount = ({ initial, item, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  const [disponible] = useState(parseInt(item.stock));

  const sumar = () => {
    if (count < disponible) {
      setCount(count + 1);
    } else {
      Swal({
        title: 'Disponible',
        text: 'Ha superado la cantidad disponible',
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

  if(disponible <=0 ){
    return (
      <>
      <br></br>
      <hr></hr>
      <br></br>
      <Alert key={item.id} variant='danger'>AGOTADO</Alert>
      </>  );
  }
  return (
    <>
      <Button variant="primary" className="linea button" size="sm" onClick={restar}>-</Button>
      <Form.Control type="text" className="linea input" size="sm" value={count} readOnly="readonly" min="0" />
      <Button variant="primary" className="linea button" size="sm" onClick={sumar}>+</Button>
      <hr></hr>
      <div style={{'textAlign':'center'}}>
        <Button variant="primary" className="button-detail" onClick={() => onAdd(item, count)}>Agregar</Button>
      </div>
    </>
  );
};

export default ItemCount;
