
import { useRef, useCallback } from "react";

import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import {
	loadingChange,
	searchTermChange,
	setResults,
	setBaseCoin,
} from "./slice";

import SearchResults from "../SearchResults";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import LinearProgress from "@mui/material/LinearProgress";

const SearchBar = () => {
	// Used for debounced API request.
	const searchRef = useRef("");

	const loading = useTypedSelector((state) => state.searchBar.loading);
	const searchTerm = useTypedSelector((state) => state.searchBar.searchTerm);
	const results = useTypedSelector((state) => state.searchBar.results);

	const dispatch = useTypedDispatch();

	const handleCoinGeckoRequest = async () => {
		const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchRef.current}`);
		if(!response.ok) return;
		const json = await response.json();
		dispatch(loadingChange(false));
		dispatch(setResults(json.coins));
	};

	const handleSearchTermChange = (e) => {
		dispatch(loadingChange(true));
		dispatch(setBaseCoin(undefined));
		dispatch(searchTermChange(e.currentTarget.value));
		searchRef.current = e.currentTarget.value;
		if(!searchRef.current){
			dispatch(loadingChange(false));
			dispatch(setResults([]));
			return;
		}
		debouncedRequest();
	};

	const debounce = (fn, delay) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { 
				fn(...args); 
			}, delay);
		};
	};

	const debouncedRequest = useCallback(debounce(() => handleCoinGeckoRequest(), 1500),[]);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
						>
							<SearchIcon />
						</IconButton>
						<Input 
							fullWidth 
							disableUnderline
							placeholder="Search cryptocurrency"
							sx={{ color: "white" }}
							value={searchTerm}
							onChange={handleSearchTermChange}
						/>
					</Toolbar>
				</AppBar>
			</Box>
			{loading && <LinearProgress />}
			{Boolean(results.length) && <SearchResults />}
		</>
	);
};

export default SearchBar;
