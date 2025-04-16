import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const SitiUtili = () => {
  const siti = [
    {
      nome: 'CoinGecko',
      descrizione: 'Una piattaforma completa per monitorare prezzi, volumi e dati di mercato delle criptovalute.',
      link: 'https://www.coingecko.com/',
      immagine: 'https://www.coingecko.com/favicon.ico',
    },
    {
      nome: 'CoinMarketCap',
      descrizione: 'Uno dei siti più popolari per analizzare il mercato delle criptovalute e ottenere dati aggiornati.',
      link: 'https://coinmarketcap.com/',
      immagine: 'https://coinmarketcap.com/favicon.ico',
    },
    {
      nome: 'CryptoCompare',
      descrizione: 'Una piattaforma per confrontare criptovalute, leggere notizie e accedere a strumenti di analisi.',
      link: 'https://www.cryptocompare.com/',
      immagine: 'https://www.cryptocompare.com/media/20562/favicon.png',
    },
    {
      nome: 'TradingView',
      descrizione: 'Uno strumento avanzato per analisi tecnica e grafici di criptovalute e altri asset.',
      link: 'https://www.tradingview.com/',
      immagine: 'https://www.tradingview.com/favicon.ico',
    },
    {
      nome: 'Messari',
      descrizione: 'Una piattaforma per approfondimenti e analisi di mercato sulle criptovalute.',
      link: 'https://messari.io/',
      immagine: 'https://messari.io/favicon.ico',
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4" style={{ color: '#e2e2e2' }}>Siti Utili per Studiare le Crypto</h1>
      <Row className="g-4">
        {siti.map((sito, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="h-100 shadow-lg" style={{ backgroundColor: 'rgba(97, 120, 137, 0.8)', borderColor: '#1e2a34' }}>
              <Card.Img
                variant="top"
                src={sito.immagine}
                alt={sito.nome}
                style={{ height: '50px', width: '50px', margin: '20px auto' }}
              />
              <Card.Body>
                <Card.Title className="text-center" style={{ color: '#d4e2e9' }}>{sito.nome}</Card.Title>
                <Card.Text className="text-muted" style={{ color: '#e0e5ec' }}>
                  {sito.descrizione}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a
                    href={sito.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      backgroundColor: '#4c5d6c', 
                      color: '#fff',
                      border: 'none',
                      padding: '8px 16px',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#3a4b5e'} // Hover 
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4c5d6c'} // Hover 
                  >
                    Visita
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SitiUtili;
