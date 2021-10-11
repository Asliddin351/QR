import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  const onSignin = () => {
    history.replace("/login");
  };

  return (
    <Navbar bg='light' variant='light' className='mb-4'>
      <Container>
        <Navbar.Brand>
          <Link to='/'> QR Menu </Link>
        </Navbar.Brand>
        <Nav className='flex-grow-1 justify-content-end'>
          <Nav.Link onClick={onSignin}>Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
