import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DiscoverDefi = () => {
  return (
    <div
      style={{
        backgroundColor: '#273f55', // Sfondo più armonizzato
        color: '#f5f5f5',
        minHeight: '100vh',
        padding: '50px 0',
      }}
    >
      <Container>
        <h1
          className="text-center mb-4"
          style={{
            color: '#00d1b2',
            fontWeight: 'bold',
          }}
        >
          Cos'è la DeFi? Una Guida per Neofiti
        </h1>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              La <strong>DeFi</strong>, abbreviazione di <em>Finanza Decentralizzata</em>, è un ecosistema di applicazioni finanziarie costruite su blockchain, come Ethereum. A differenza della finanza tradizionale, che si basa su banche e istituzioni centralizzate, la DeFi utilizza contratti intelligenti (<em>smart contracts</em>) per eliminare gli intermediari, rendendo le transazioni più rapide, economiche e accessibili a chiunque abbia una connessione Internet.
            </p>

            <h2 style={{ color: '#ff6f61', marginTop: '30px' }}>Come Funziona la DeFi?</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              La DeFi si basa su <strong>blockchain</strong>, una tecnologia che registra le transazioni in modo trasparente e immutabile. Le applicazioni DeFi utilizzano contratti intelligenti, che sono programmi auto-eseguibili che operano secondo regole predefinite. Ad esempio, puoi prestare criptovalute e guadagnare interessi senza bisogno di una banca.
            </p>

            <h2 style={{ color: '#ff6f61', marginTop: '30px' }}>Vantaggi della DeFi</h2>
            <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              <li><strong>Accessibilità:</strong> Chiunque può accedere alla DeFi, indipendentemente dalla posizione geografica o dal reddito.</li>
              <li><strong>Trasparenza:</strong> Tutte le transazioni sono registrate su una blockchain pubblica.</li>
              <li><strong>Eliminazione degli intermediari:</strong> Non hai bisogno di banche o istituzioni per effettuare transazioni.</li>
              <li><strong>Innovazione:</strong> La DeFi offre strumenti finanziari avanzati come prestiti, staking e trading decentralizzato.</li>
            </ul>

            <h2 style={{ color: '#ff6f61', marginTop: '30px' }}>Rischi della DeFi</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              Nonostante i suoi vantaggi, la DeFi presenta anche dei rischi. Ad esempio:
            </p>
            <ul style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              <li><strong>Volatilità:</strong> I prezzi delle criptovalute possono variare drasticamente.</li>
              <li><strong>Rischi tecnici:</strong> I contratti intelligenti possono contenere bug o vulnerabilità.</li>
              <li><strong>Regolamentazione:</strong> La DeFi opera in un'area grigia dal punto di vista legale in molti paesi.</li>
            </ul>

            <h2 style={{ color: '#ff6f61', marginTop: '30px' }}>Come Iniziare con la DeFi</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              Per iniziare con la DeFi, segui questi passaggi:
            </p>
            <ol style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              <li>
                <strong>Ottieni un wallet:</strong> Usa un wallet come{' '}
                <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#00d1b2' }}>
                  MetaMask
                </a>{' '}
                per gestire le tue criptovalute.
              </li>
              <li>
                <strong>Acquista criptovalute:</strong> Acquista Ethereum o altre criptovalute su un exchange affidabile.
              </li>
              <li>
                <strong>Esplora le DApp:</strong> Visita piattaforme come{' '}
                <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#00d1b2' }}>
                  Uniswap
                </a>{' '}
                o{' '}
                <a href="https://aave.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#00d1b2' }}>
                  Aave
                </a>{' '}
                per iniziare.
              </li>
            </ol>

            <p style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
              La DeFi rappresenta una rivoluzione nel mondo della finanza, ma è importante fare le proprie ricerche e comprendere i rischi prima di investire.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiscoverDefi;
