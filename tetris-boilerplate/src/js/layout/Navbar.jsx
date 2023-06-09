import React from "react";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <BootstrapNavbar className="navbar-style px-5" expand="lg" variant="dark">
      <BootstrapNavbar.Brand href="#home">Tetris Online</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-flex justify-content-between w-100">
          <div className="d-flex">
            <Nav.Item>
              <NavLink to="/">Jugar</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/options">Opciones</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/instrucciones">Instrucciones de Juego</NavLink>
            </Nav.Item>
          </div>
          <div className="d-flex">
            <Nav.Item>
              <NavLink to="/login">Iniciar sesion</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/registro">Registrarse</NavLink>
            </Nav.Item>
          </div>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
