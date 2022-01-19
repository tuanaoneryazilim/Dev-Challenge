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
            <Nav>
              
            </Nav>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
  }
}
