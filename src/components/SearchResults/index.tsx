import { useTypedSelector, useTypedDispatch } from "../../store/hooks";
import { setBaseCoin } from "../SearchBar/slice";

import Paper from "@mui/material/Paper";
import SingleResult from "./SingleResult";
import SelectedResult from "./SelectedResult";

const SearchResults = () => {

	const results = useTypedSelector((state) => state.searchBar.results);
	const baseCoin = useTypedSelector((state) => state.searchBar.baseCoin);

	const dispatch = useTypedDispatch();

	const handleSelectCoin = (_e, selected) => {
		dispatch(setBaseCoin(selected));
	};

	return(
		<Paper square={true} elevation={12}>
			{Boolean(baseCoin) && 
				<SelectedResult />
			}
			{results.map((coin,index) => {
				return(
					<SingleResult 
						key={index} 
						coin={coin} 
						handleSelectCoin={handleSelectCoin}
					/>
				);
			})}
		</Paper>
	);
};

export default SearchResults;