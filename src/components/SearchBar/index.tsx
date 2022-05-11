
import { useRef, useCallback } from "react";

import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import {
	searchTermChange,
	setResults,
} from "./slice";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import SearchResults from "../SearchResults";

const SearchBar = () => {
	// Used for debounced API request.
	const searchRef = useRef("");

	const searchTerm = useTypedSelector((state) => state.searchBar.searchTerm);
	const results = useTypedSelector((state) => state.searchBar.results);

	const dispatch = useTypedDispatch();

	const handleCoinGeckoRequest = async () => {
		console.log("called debounce", searchRef.current);
		if(!searchRef.current) return;
		const response = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchRef.current}`);
		if(!response.ok) return;
		const json = await response.json();
		console.log(json);
		dispatch(setResults(json.coins));
	};

	const handleSearchTermChange = (e) => {
		dispatch(searchTermChange(e.currentTarget.value));
		searchRef.current = e.currentTarget.value;
		debouncedRequest();
	};

	const debounce = (fn, delay) => {
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { 
				console.log("fn within timer");
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
			{Boolean(results.length) && <SearchResults />}
		</>
	);
};

export default SearchBar;
