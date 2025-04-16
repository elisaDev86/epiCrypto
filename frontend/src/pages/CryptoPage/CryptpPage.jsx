import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';
import { getCryptoById } from '../../services/cryptoService';

const CryptoPage = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getCryptoById(id);
        setCrypto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container
      style={{
        marginTop: '80px',
        backgroundColor: '#2c3e50',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        color: '#fff',
      }}
    >
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="light" />
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card bg="dark" text="white" className="mb-4">
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <img src={crypto.image} alt={crypto.name} width="40" className="me-3" />
                  <div>
                    <Card.Title>{crypto.name} ({crypto.symbol})</Card.Title>
                    <Card.Subtitle className="text-muted">
                      Prezzo attuale: ${crypto.price.toLocaleString()}
                    </Card.Subtitle>
                    <span
                      style={{
                        color: crypto.change >= 0 ? 'lightgreen' : 'red',
                        fontWeight: 'bold',
                      }}
                    >
                      {crypto.change >= 0 ? '+' : ''}
                      {crypto.change?.toFixed(2)}%
                    </span>
                  </div>
                </div>
                <Card.Text>
                  {crypto.description ? crypto.description.slice(0, 300) + '...' : 'Nessuna descrizione disponibile.'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CryptoPage;
