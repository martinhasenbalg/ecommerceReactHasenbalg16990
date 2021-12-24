import React, { useContext, useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { LoginContext } from "../context/LoginContext";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert";

const Login = () => {
  const { login, logout, usuarioActual } = useContext(LoginContext);
  const { buscarComprador, comprador, setComprador } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState(null);
  
  const ingresar = () => {    
    if (email.length <= 0 || password.length <= 0) {
      Swal({
        title: "Acceso Incorrecto",
        text: `Debe ingresar su usuario y contraseña`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return false;
    }
    login(email, password)
      .then(() => {        
        const user = usuarioActual()
        localStorage.setItem("usuario",JSON.stringify(user));
        setUsuario(user);
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({
          title: "Acceso Incorrecto",
          text: err,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
        return false;
      });
  };

  const salir = () => {
    logout();
    localStorage.removeItem("usuario");
    setComprador(null);
    setUsuario(null);
    window.location.reload();
  };

 useEffect(() => {
    if(localStorage.getItem("usuario")){
      const user = JSON.parse(localStorage.getItem("usuario"));
      setUsuario(user);
    }else{
      setUsuario(null)
    }
  },[]);
  
  if (usuario==null) {
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="Correo"
                type="email"
                onChange={(ev) => setEmail(ev.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Contraseña"
                type="password"
                onChange={(ev) => setPassword(ev.target.value)}
              />
            </Col>
            <Col>
              <Button variant="success" onClick={() => ingresar()}>
                Ingresar
              </Button>{" "}
              <Button variant="warning" href="/registrarse">
                Registrarse
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  } else {
    return (
      <div>
        <Form>
          <Row>
            <Col>
              <span>{usuario.displayName}{"  "}</span>
              <Button variant="warning" href="/mispedidos">
                {" "}
                Mis Pedidos
              </Button>{" "}
              <Button variant="danger" onClick={() => salir()}>
                {" "}
                Salir
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
};

export default Login;
