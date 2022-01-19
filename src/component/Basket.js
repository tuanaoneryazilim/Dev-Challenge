import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  NavbarBrand,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import loginlogo from "../img/placeholder-image.png";

export default class Basket extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ float: "right", width: "20%"}}>
        <Navbar expand={false}>
          <Container>
            <Navbar.Toggle />
            <Navbar.Brand href="#">Detaylı Sepeti Göster</Navbar.Brand>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  Detaylı Sepeti Gizle
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
  }
}
