import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaFire, FaHeart, FaThumbsUp, FaThumbsDown, FaSadTear } from 'react-icons/fa';
import { sendUserReaction } from '../../services/reactionService';

const EmoticonPanel = ({ crypto }) => {
  const [selectedSentiment, setSelectedSentiment] = useState(null);

  const handleSentimentClick = async (sentiment) => {
    setSelectedSentiment(sentiment);

    try {
      const token = localStorage.getItem('token');
      console.log('Reazione:', sentiment, 'Crypto:', crypto); // debug
      await sendUserReaction(sentiment, crypto, token);
      console.log('Reazione inviata con successo:', sentiment);
    } catch (error) {
      console.error('Errore durante l\'invio della reazione:', error);
    }
  };

  return (
    <Row className="justify-content-center mt-4">
      <Col xs={12} md={6} className="d-flex justify-content-around">
        <Button
          variant={selectedSentiment === 'fire' ? 'warning' : 'outline-secondary'}
          onClick={() => handleSentimentClick('fire')}
        >
          <FaFire size={30} />
        </Button>
        <Button
          variant={selectedSentiment === 'heart' ? 'danger' : 'outline-secondary'}
          onClick={() => handleSentimentClick('heart')}
        >
          <FaHeart size={30} />
        </Button>
        <Button
          variant={selectedSentiment === 'thumbsUp' ? 'success' : 'outline-secondary'}
          onClick={() => handleSentimentClick('thumbsUp')}
        >
          <FaThumbsUp size={30} />
        </Button>
        <Button
          variant={selectedSentiment === 'thumbsDown' ? 'danger' : 'outline-secondary'}
          onClick={() => handleSentimentClick('thumbsDown')}
        >
          <FaThumbsDown size={30} />
        </Button>
        <Button
          variant={selectedSentiment === 'sad' ? 'secondary' : 'outline-secondary'}
          onClick={() => handleSentimentClick('sad')}
        >
          <FaSadTear size={30} />
        </Button>
      </Col>
    </Row>
  );
};

export default EmoticonPanel;
