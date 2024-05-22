"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-full bold">
      <Container className=" w-full items-center">
        <Navbar.Brand className="m-0 text-xl" href="/home">
          CodeCamp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="items-center justify-center mr-16"
          id="basic-navbar-nav"
        >
          <Nav className="gap-x-8 justify-center content-center items-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/getstarted">Login | Sign Up</Nav.Link>
            <Nav.Link href="/contactus">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
