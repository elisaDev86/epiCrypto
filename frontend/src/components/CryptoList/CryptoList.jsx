import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getCryptoById } from '../../services/cryptoService'; 

const cryptoList = [
  { id: 'bitcoin', symbol: 'BTC' },
  { id: 'ethereum', symbol: 'ETH' },
  { id: 'ripple', symbol: 'XRP' },
  { id: 'cardano', symbol: 'ADA' },
  { id: 'dogecoin', symbol: 'DOGE' },
];

const CryptoList = ({ onSelectCrypto }) => {
  const navigate = useNavigate();

  const handleClick = async (crypto) => {
    try {
      const cryptoData = await getCryptoById(crypto.id); // Fetch CoinGecko
      onSelectCrypto(cryptoData); 
      navigate(`/crypto/${crypto.id}`); 
    } catch (error) {
      console.error("Errore nel recupero della crypto:", error.message);
    }
  };

  return (
    <Stack direction="horizontal" gap={3} className="flex-wrap justify-content-right mt-4">
      {cryptoList.map((crypto) => (
        <Button
          key={crypto.id}
          variant="outline-warning"
          onClick={() => handleClick(crypto)}
          className="text-uppercase"
        >
          {crypto.symbol}
        </Button>
      ))}
    </Stack>
  );
};

export default CryptoList;
