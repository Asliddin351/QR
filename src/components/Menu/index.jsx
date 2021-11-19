import React, {useContext} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Menu = () => {
  const history = useHistory();

  const auth = useContext(AuthContext)



  const onSignin = () => {
    history.replace("/login");
  };


  const onSignOut = () => {
    auth.signOut();
    history.push('/login')
  }

  const goToPlaces = () => {
    history.push('/places')
  }

  return (
    <Navbar bg='light' variant='light' className='mb-4'>
      <Container>
        <Navbar.Brand>
          <Link to='/' style={{color: "#000", textDecoration: "none", fontWeight: "bold"}}> QR Menu </Link>
        </Navbar.Brand>
        <Nav>
          <Nav.Link onClick={goToPlaces}>Places</Nav.Link>
        </Nav>
        <Nav className='flex-grow-1 justify-content-end'>
          {auth.token ? (
          <Nav.Link onClick={onSignOut}>SignOut</Nav.Link>
          ) : (
            <Nav.Link onClick={onSignin}>Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;
