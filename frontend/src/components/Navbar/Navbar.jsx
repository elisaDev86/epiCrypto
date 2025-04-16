import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const AppNavbar = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    navigate('/login');
  };

  return (
    <Navbar style={{ backgroundColor: '#1a1a2e' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Epi_Crypto
        </Navbar.Brand>
        <Nav className="mx-auto justify-content-center">
          <Nav.Link as={Link} to="/discover-defi" className="mx-3">Discover Defi</Nav.Link>
          <Nav.Link as={Link} to="/strumenti-operativi" className="mx-3">Strumenti Operativi</Nav.Link>
          <Nav.Link as={Link} to="/siti-utili" className="mx-3">Siti Utili</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Dropdown align="end">
            <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              <FaUserCircle size={20} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogout}>
                <FaSignOutAlt style={{ marginRight: '5px' }} />
                Logout
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/delete-user">
                Elimina Utente
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
