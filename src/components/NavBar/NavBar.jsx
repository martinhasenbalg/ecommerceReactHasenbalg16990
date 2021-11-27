import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <a> <img src="wine.png" width="30" height="30" className="d-inline-block align-top blogo" alt="logo" /> </a>
        <Navbar.Brand><NavLink to={ `/` }>Drink&Eat</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link><NavLink to={ `/categoria/1` }>Vinos</NavLink></Nav.Link>
            <Nav.Link><NavLink to={ `/categoria/2` }>Cervezas</NavLink></Nav.Link>
            <Nav.Link><NavLink to={ `/categoria/3` }>Gourmet</NavLink></Nav.Link>
            <Nav.Link><NavLink to={ `/carrito` }>Mi Carrito</NavLink></Nav.Link>
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
    )
}

export default NavBar

