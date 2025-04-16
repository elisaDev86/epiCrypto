export const getCryptoById = async (id) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        if (!response.ok) {
            throw new Error('Impossibile recuperare i dati della criptovaluta.');
        }

        const data = await response.json();

        return {
            name: data.name,
            symbol: data.symbol.toUpperCase(),
            price: data.market_data.current_price.usd,
            change: data.market_data.price_change_percentage_24h,
            description: data.description.it || data.description.en,
            image: data.image.large,
        };
    } catch (error) {
        throw error;
    }
};
