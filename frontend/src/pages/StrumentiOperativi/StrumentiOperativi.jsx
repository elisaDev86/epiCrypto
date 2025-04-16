import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Importa le icone locali
import MetaMaskIcon from '../../assets/icon/metamask.png';
import PhantomIcon from '../../assets/icon/phantom.png';
import AtomicWalletIcon from '../../assets/icon/atomic.png';
import TrustWalletIcon from '../../assets/icon/trust wallet.png';

const StrumentiOperativi = () => {
  const wallets = [
    {
      nome: 'MetaMask',
      descrizione: 'Uno dei wallet più popolari per interagire con la DeFi e le DApp basate su Ethereum.',
      link: 'https://metamask.io/',
      immagine: MetaMaskIcon, // Usa l'icona importata
    },
    {
      nome: 'Trust Wallet',
      descrizione: 'Un wallet mobile sicuro e facile da usare per gestire criptovalute e accedere alla DeFi.',
      link: 'https://trustwallet.com/',
      immagine: TrustWalletIcon, // Usa l'icona importata
    },
    {
      nome: 'Ledger',
      descrizione: 'Un hardware wallet per la massima sicurezza nella gestione delle criptovalute.',
      link: 'https://www.ledger.com/',
      immagine: 'https://www.ledger.com/favicon.ico', // Icona esistente
    },
    {
      nome: 'Trezor',
      descrizione: 'Un altro hardware wallet leader per la sicurezza delle criptovalute.',
      link: 'https://trezor.io/',
      immagine: 'https://trezor.io/favicon.ico', // Icona esistente
    },
    {
      nome: 'Phantom',
      descrizione: 'Un wallet progettato per l’ecosistema Solana, ideale per la DeFi e gli NFT.',
      link: 'https://phantom.app/',
      immagine: PhantomIcon, // Usa l'icona importata
    },
    {
      nome: 'Exodus',
      descrizione: 'Un wallet multi-asset con un’interfaccia utente intuitiva e supporto per molte criptovalute.',
      link: 'https://www.exodus.com/',
      immagine: 'https://www.exodus.com/favicon.ico', // Icona esistente
    },
    {
      nome: 'Atomic Wallet',
      descrizione: 'Un wallet decentralizzato che supporta oltre 500 criptovalute.',
      link: 'https://atomicwallet.io/',
      immagine: AtomicWalletIcon, // Usa l'icona importata
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4" style={{ color: '#d4e2e9' }}>Wallet Importanti per la DeFi</h1>
      <Row className="g-4">
        {wallets.map((wallet, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="h-100 shadow-lg" style={{ backgroundColor: 'rgba(97, 120, 137, 0.8)', borderColor: '#1e2a34' }}>
              <Card.Img
                variant="top"
                src={wallet.immagine}
                alt={wallet.nome}
                style={{
                  height: '50px', 
                  width: '50px', 
                  margin: '20px auto', 
                  objectFit: 'contain', // Rende l'immagine ben proporzionata
                }}
                onError={(e) => {
                  e.target.onerror = null; // Evita loop infiniti
                  e.target.src = 'https://via.placeholder.com/50'; // Icona generica di fallback
                }}
              />
              <Card.Body>
                <Card.Title className="text-center" style={{ color: '#d4e2e9' }}>{wallet.nome}</Card.Title>
                <Card.Text className="text-muted" style={{ color: '#a5b3c7' }}>
                  {wallet.descrizione}
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <a
                    href={wallet.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      backgroundColor: '#4c5d6c', // Colore blu scuro per il bottone
                      color: '#fff',
                      border: 'none',
                      padding: '8px 16px',
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#3a4b5e'} // Hover effetto
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4c5d6c'} // Hover effetto
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

export default StrumentiOperativi;
