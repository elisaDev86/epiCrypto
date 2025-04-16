import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a1a2e' }} variant="dark"  className="text-white py-3 mt-auto">
      <Container>
        <Row className="text-center">
          <Col>
            <p className="mb-1">&copy; {new Date().getFullYear()} Epi_Crypto</p>
            <p className="mb-0">
              <a href="/privacy-policy" className="text-white text-decoration-underline">
                Privacy Policy
              </a>{' '}
              |{' '}
              <a href="/terms-of-service" className="text-white text-decoration-underline">
                Terms of Service
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
