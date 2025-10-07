import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="navbar-light bg-white shadow-sm py-3"
      style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#" className="fw-bold text-primary fs-5">
          JOKIIN AJA
        </Navbar.Brand>

        {/* Toggle untuk mobile */}
        <Navbar.Toggle 
          aria-controls="navbarNav" 
          className="navbar-toggler"
        />

        {/* Isi Navbar */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto align-items-center gap-3 fw-semibold">
            <Nav.Link href="#" className="text-primary active">
              Home
            </Nav.Link>
            <Nav.Link href="#">
              Keunggulan
            </Nav.Link>
            <Nav.Link href="#">
              Testimoni
            </Nav.Link>
            
            <Button 
              variant="outline-primary" 
              className="fw-semibold border-2"
              style={{ 
                whiteSpace: 'nowrap',
                borderRadius: '25px',
                padding: '8px 20px',
                borderWidth: '2px'
              }}
            >
              Daftar Jadi Penjoki
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}