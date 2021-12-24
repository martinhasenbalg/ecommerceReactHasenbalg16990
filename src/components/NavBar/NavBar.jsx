import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Alert} from 'react-bootstrap';
import { faHome, faAddressBook, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from '../CartWidget';
import Login from './Login';


const NavBar = () => {

    const { cantidades,orderCreatedId, comprador, getCarritoStorage } = useContext(CartContext);

    useEffect(() => {
        if(cantidades<=0){
        getCarritoStorage();}
      }, [cantidades]);
    
    return (<div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <a> <img src="wine.png" width="30" height="30" className="d-inline-block align-top blogo" alt="logo" /> </a>
        <Navbar.Brand><NavLink to={ `/` }>Drink&Eat</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link><NavLink to={ `/` }><FontAwesomeIcon icon={faHome} /> Inicio</NavLink></Nav.Link>
            <Nav.Link><NavLink to={ `/categoria/1` }>Vinos</NavLink></Nav.Link>
            <Nav.Link><NavLink to={ `/categoria/2` }>Cervezas</NavLink></Nav.Link>
            <Nav.Link><NavLink to={ `/categoria/3` }>Gourmet</NavLink></Nav.Link>
            {cantidades > 0 && <Nav.Link><NavLink to={ `/carrito` }><CartWidget cant={cantidades}/></NavLink></Nav.Link>}
            <Nav.Link><NavLink to={ `/contacto` }><FontAwesomeIcon icon={faAddressBook} /> Contáctenos</NavLink></Nav.Link>
            <Login />
            <NavDropdown title="Mas" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sobre Nosotros</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Promociones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#">Instagram</Nav.Link>
            <Nav.Link href="#">Facebook</Nav.Link>
            <Nav.Link href="#">Twitter</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
{orderCreatedId != null && <Alert key={orderCreatedId} variant='success'>Se ha generado su pedido # {orderCreatedId}</Alert>}
<br></br>
</div>
    )
};

export default NavBar

