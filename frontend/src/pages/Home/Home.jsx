import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CryptoList from '../../components/CryptoList/CryptoList';  
import EmoticonPanel from '../../components/InteractionEmoticonPanel/InteractionEmoticonPanel'; 
import CryptoChart from '../../components/CryptoChart/CryptoChart'; // ⬅️ Importa il componente grafico
import { sendUserReaction } from '../../services/reactionService';

const Home = () => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);  
  const [sentiment, setSentiment] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const handleSentimentChange = async (sentiment) => {
    setSentiment(sentiment);
    console.log(`Sentiment selezionato: ${sentiment}`);

    if (selectedCrypto) {
      try {
        await sendUserReaction(sentiment, selectedCrypto, token);
        console.log(`Reazione inviata per ${selectedCrypto} con sentiment ${sentiment}`);
      } catch (error) {
        console.error('Errore durante l\'invio della reazione:', error);
      }
    } else {
      console.error('Seleziona una criptovaluta prima di inviare una reazione.');
    }
  };

  const handleSelectCrypto = (crypto) => {
    setSelectedCrypto(crypto);
    console.log(`Crypto selezionata: ${crypto}`);
  };

  return (
    <Container style={{ marginTop: '80px' }}>
      {/* Sezione: Lista delle criptovalute */}
      <Row>
        <Col xs={12}>
          <h3 style={{ color: '#fff' }}>Seleziona una cryptovaluta per vedere il prezzo in real time:</h3>
          <CryptoList onSelectCrypto={handleSelectCrypto} />
        </Col>
      </Row>

      {/* Sezione: Grafico della criptovaluta */}
      <Row className="mt-4">
        <Col xs={12}>
          <CryptoChart /> {/* ⬅️ Inserito qui */}
        </Col>
      </Row>

      {/* Sezione: Pannello delle Emoticon */}
      <Row className="mt-4">
        <Col xs={12}>
          <EmoticonPanel 
            crypto={selectedCrypto}  
            onSentimentChange={handleSentimentChange} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
