import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SearchBarState {
  searchTerm: string;
	results: SearchResult[];
	baseCoin: SearchResult;
}

export interface SearchResult {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  large: string;
}

// Define the initial state using that type
const initialState: SearchBarState = {
	searchTerm: "",
	results: [],
	baseCoin: "",
};

export const searchbarSlice = createSlice({
	name: "searchBar",
	initialState,
	reducers: {
		searchTermChange:(state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
		setResults: (state, action: PayloadAction<SearchResult[]>) => {
			state.results = action.payload;
		},
		setBaseCoin: (state, action: PayloadAction<SearchResult>) => {
			state.baseCoin = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	searchTermChange,
	setResults,
	setBaseCoin,
} = searchbarSlice.actions;

export default searchbarSlice.reducer;