import React, { useContext, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { LoginContext } from "../context/LoginContext";
import Swal from "sweetalert";

function Register() {
  const { login, usuarioActual, registrar } = useContext(LoginContext);
  const [usuario, setUsuario] = useState(null);
  const [comprador, setComprador] = useState({
    nombre: "",
    telefono: "",
    email: "",
    password: "1",
    vpassword: "0"
  });
 
  function handleChange(event) {
    setComprador({ ...comprador, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if(comprador.password!=comprador.vpassword){
      alert('Las contraseñas no coinciden');
      return false;
    }
    await registrar(comprador,comprador.password);
    login(comprador.email,comprador.password).then(() => {        
      const user = usuarioActual()
      localStorage.setItem("usuario",JSON.stringify(user));
      setUsuario(user);
      window.open("/","_self");
    })
    .catch((err) => {
      Swal({
        title: "Acceso Incorrecto",
        text: err,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return false;
    });
  }

  return (
    <div className="div-img-datos">
      <h3>Registro de Usuario</h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={3}></Col>
          <Col xs={3}>
            <Form.Control
              placeholder="Correo"
              name="email"
              type="email"
              onChange={handleChange} 
              required
            />
          </Col>
          <Col xs={3}>
            <Row>
              <Col xs={6}>
                <Form.Control
                  placeholder="Contraseña"
                  name="password"
                  type="password"
                  onChange={handleChange} 
                  required
                />
              </Col>
              <Col xs={6}>
                <Form.Control
                  placeholder="Validar Contraseña"
                  name="vpassword"
                  type="password"
                  onChange={handleChange} 
                  required
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs={3}></Col>
          <Col xs={3}>
            <Form.Control
              placeholder="Nombre"
              name="nombre"
              type="text"
              onChange={handleChange} 
              required
            />
          </Col>
          <Col xs={3}>
            <Form.Control
              placeholder="Telefono"
              name="telefono"
              type="text"
              onChange={handleChange} 
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <br></br>
            <Button variant="success" type="submit">
              Registrarse
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Register;
