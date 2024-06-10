import React from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidgetComponent from '../CardWidgetComponent/CardWidgetComponent';



const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand><Link to="/">Weisser Pc Store</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Inicio</Link></Nav.Link>
                        <Nav.Link href="#link">Tienda</Nav.Link>
                        <Nav.Link href="#link">Desktop</Nav.Link>
                        <Nav.Link href="#link">Notebooks</Nav.Link>
                        <Nav.Link href="#link">All In One</Nav.Link>
                        <NavDropdown title="Reacondicionados" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Lenovo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                HP
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Dell</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Reclamos
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CardWidgetComponent />
            </Container>
        </Navbar>
    );
}

export default NavBarComponent;
                