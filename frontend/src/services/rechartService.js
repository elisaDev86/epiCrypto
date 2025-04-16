import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

export const getCryptoMarketChart = async (coinId, days = 7) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/coins/${coinId}/market_chart`,
            {
                params: {
                    vs_currency: 'usd',
                    days,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(`Errore nel recupero dei dati per ${coinId}:`, error);
        throw error;
    }
};
