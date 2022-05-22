import { PairCoin, SearchResult } from "../../SearchBar/slice";

const processAPIData = (baseCoin: SearchResult, jsonResponse: PairCoin[]) => {
	let json = jsonResponse;
	// remove base coin from results (since we don't need to pair it with itself).
	json = json.filter((coin: PairCoin) => coin.id !== baseCoin.id)
		.map((coin)=>{
			coin = { 
				...coin,
				// change price to show how much coin to buy 1 base coin (as it's other way round from API res).
				current_price: 1 / coin.current_price,
				price_change_percentage_1h_in_currency: coin.price_change_percentage_1h_in_currency * -1,
				price_change_percentage_24h_in_currency: coin.price_change_percentage_24h_in_currency * -1,
				price_change_percentage_7d_in_currency: coin.price_change_percentage_7d_in_currency * -1,
			};
			return coin;
		});
	return json;
};

export const processAPIData2 = (market_data: PairCoin) => {
	const json = [];
	const len = Object.keys(market_data["current_price"]);
	len.forEach(coin => json.push({
		"symbol": coin,
		"current_price": market_data.current_price[coin],
		"price_change_percentage_1h_in_currency": market_data.price_change_percentage_1h_in_currency[coin],
		"price_change_percentage_24h_in_currency":market_data.price_change_percentage_24h_in_currency[coin],
		"price_change_percentage_7d_in_currency": market_data.price_change_percentage_7d_in_currency[coin],
	}));
	return json;
};

export default processAPIData;