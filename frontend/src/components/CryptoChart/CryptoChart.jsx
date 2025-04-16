import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2'; 
import { getCryptoMarketChart } from '../../services/rechartService'; // Importare la funzione per ottenere i dati dei grafici
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'; // Importa le dipendenze necessarie di Chart.js

// Aggiungere i componenti necessari per Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const CryptoChart = () => {
  const [chartData, setChartData] = useState(null); 
  const [selectedCoin, setSelectedCoin] = useState('bitcoin'); // Moneta selezionata (Bitcoin di default)
  const [loading, setLoading] = useState(false); 

  // Lista delle monete da visualizzare nel grafico
  const coins = ['bitcoin', 'ethereum', 'xrp', 'cardano', 'dogecoin'];

  // Funzione per caricare i dati del grafico
  const loadChartData = async (coinId) => {
    setLoading(true);
    try {
      const data = await getCryptoMarketChart(coinId, 7); // Chiamata API per ottenere i dati (ultimi 7 giorni)
      const chartData = {
        labels: data.prices.map((price) => new Date(price[0]).toLocaleDateString()), // Date format
        datasets: [
          {
            label: `${coinId.toUpperCase()} Price (USD)`,
            data: data.prices.map((price) => price[1]),
            borderColor: 'rgba(75,192,192,1)', // Colore grafico
            backgroundColor: 'rgba(75,192,192,0.2)',
            fill: true,
            tension: 0.4,
          },
        ],
      };
      setChartData(chartData); // Aggiornare i dati del grafico
    } catch (error) {
      console.error('Errore nel recupero dei dati del grafico:', error);
    }
    setLoading(false);
  };

  // Caricare i dati quando la moneta selezionata cambia
  useEffect(() => {
    loadChartData(selectedCoin);
  }, [selectedCoin]);

  // Funzione per gestire il cambio della moneta scelta
  const handleCoinChange = (coinId) => {
    setSelectedCoin(coinId);
  };

  return (
    <div>
      <h3 style={{ color: '#dcdcdc' }}>Clicca sulle caselle per scorrere i grafici:</h3>
      <div className="crypto-selector">
        {/* Creiamo un elenco di pulsanti per cambiare la moneta */}
        {coins.map((coin) => (
          <button key={coin} onClick={() => handleCoinChange(coin)} style={{ marginRight: '10px' }}>
            {coin.charAt(0).toUpperCase() + coin.slice(1)}
          </button>
        ))}
      </div>

      <div className="chart-container" style={{ marginTop: '20px' }}>
        {/* Visualizza il grafico solo quando i dati sono caricati */}
        {loading ? (
          <p>Caricamento dei dati...</p>
        ) : (
          chartData && <Line data={chartData} options={{ responsive: true }} />
        )}
      </div>
    </div>
  );
};

export default CryptoChart;
