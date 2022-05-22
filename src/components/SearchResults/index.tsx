import { useEffect } from "react";

import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { 
	SearchResult, 
	loadingChange,
	setBaseCoin,
	setError,
	setPairs, 
} from "../SearchBar/slice";

import SingleResult from "./SingleResult";
import SelectedResult from "./SelectedResult";
import PairResult from "./PairResult";
import processAPIData, { processAPIData2 } from "./helper/processAPIData";

import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";

const SearchResults = () => {

	const results = useTypedSelector((state) => state.searchBar.results);
	const baseCoin = useTypedSelector((state) => state.searchBar.baseCoin);
	const pairs = useTypedSelector((state) => state.searchBar.pairs);
	const error = useTypedSelector((state) => state.searchBar.error);

	const dispatch = useTypedDispatch();

	const handleSelectCoin = (_e, selected: SearchResult) => {
		dispatch(setBaseCoin(selected));
	};

	useEffect(()=>{
		handleGetCoinPairs();
		return () => {
			dispatch(setError({ exist: false, message: "" }));
			dispatch(setPairs([]));
		};
	},[baseCoin]);

	const handleGetCoinPairs = async () => {
		if(!baseCoin) return;
		dispatch(loadingChange(true));
		// create URL.
		let URL = "https://api.coingecko.com/api/v3";
		URL += "/coins/markets?";
		URL += `vs_currency=${baseCoin.symbol}`;
		URL += "&order=market_cap_desc&per_page=100";
		URL += "&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

		let fallbackURL = "https://api.coingecko.com/api/v3";
		fallbackURL += `/coins/${baseCoin.id}?`;
		fallbackURL += "localization=false&community_data=false&developer_data=false";

		try {
			const response = await fetch(URL);
			if(!response.ok) {
				if(response.status !== 400) throw new Error("Error fetching data.");
				const fallbackResponse = await fetch(fallbackURL);
				if(!fallbackResponse.ok) throw new Error("Error fetching data.");
				let fallbackJSON = await fallbackResponse.json();
				fallbackJSON = processAPIData2(fallbackJSON.market_data);
				dispatch(setPairs(fallbackJSON));
			} else {
				let json = await response.json();
				json = processAPIData(baseCoin, json);
				console.log(json);
				dispatch(setPairs(json));
			}
		} catch ({ message }){
			dispatch(setError({ exist: true, message }));
		}
		dispatch(loadingChange(false));
	};

	return(
		<Paper square={true} elevation={12}>
			{Boolean(baseCoin) && 
				<SelectedResult />
			}
			{Boolean(!baseCoin) && results.map((coin,index) => {
				return(
					<SingleResult 
						key={index}
						index={index} 
						coin={coin} 
						handleSelectCoin={handleSelectCoin}
					/>
				);
			})}
			{Boolean(baseCoin) && 
			Boolean(pairs.length) && pairs.map((coin,index)=>{
				return(
					<PairResult
						key={index}
						index={index}
						coin={coin}
					/>
				);	
			})}
			{error.exist && <Alert variant="filled" severity="error" square>{error.message}</Alert>}
		</Paper>
	);
};

export default SearchResults;