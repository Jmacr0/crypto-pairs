import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SearchBarState {
	loading: boolean;
	searchTerm: string;
	results: SearchResult[];
	baseCoin: SearchResult;
	pairs: PairCoin[];
	error: SearchError;
}

export interface SearchResult {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

export interface PairCoin {
	[key: string]: string | number | PairCoin;
	id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
	atl_change_percentage: number;
    atl_date: string;
    last_updated: string;
    price_change_percentage_1h_in_currency: number;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
}	

interface SearchError {
	exist: boolean;
	message: string;
}

// Define the initial state using that type
const initialState: SearchBarState = {
	loading: false,
	searchTerm: "",
	results: [],
	baseCoin: undefined as SearchResult,
	pairs: [] as PairCoin[],
	error: {} as SearchError,
};

export const searchbarSlice = createSlice({
	name: "searchBar",
	initialState,
	reducers: {
		loadingChange: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
		searchTermChange:(state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
		setResults: (state, action: PayloadAction<SearchResult[]>) => {
			state.results = action.payload;
		},
		setBaseCoin: (state, action: PayloadAction<SearchResult>) => {
			state.baseCoin = action.payload;
		},
		setPairs: (state, action: PayloadAction<PairCoin[]>) => {
			state.pairs = action.payload;
		},
		setError: (state, action: PayloadAction<SearchError>) => {
			state.error = action.payload;
		},	
	},
});

// Action creators are generated for each case reducer function
export const {
	loadingChange,
	searchTermChange,
	setResults,
	setBaseCoin,
	setPairs,
	setError,
} = searchbarSlice.actions;

export default searchbarSlice.reducer;