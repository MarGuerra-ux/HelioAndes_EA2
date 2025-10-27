import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Imagen from '../assets/images/helioandes.png';

function NavbarHome() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      {/* Mantiene ancho completo */}
      <Container fluid className="px-0">
        {/* Contenedor interno para alinear con el contenido */}
        <Container>
          <div className="d-flex align-items-center justify-content-between w-100">
            <img src={Imagen} width={250} alt="HelioAndes" />

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#servicios">Servicios</Nav.Link>
                <Nav.Link href="#soluciones">Soluciones</Nav.Link>
                <Nav.Link href="#demo-calculadora">DEMO</Nav.Link>
                <Nav.Link href="#planes">Planes</Nav.Link>
                <Nav.Link href="#testimonios">Testimonios</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
                <Nav.Link href="#contacto">Contacto</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;