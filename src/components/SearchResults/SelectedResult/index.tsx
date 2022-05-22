import { useTypedDispatch, useTypedSelector } from "../../../store/hooks";
import { setBaseCoin } from "../../SearchBar/slice";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import "./index.scss";

const SelectedResult = () => {

	const baseCoin = useTypedSelector((state) => state.searchBar.baseCoin);

	const dispatch = useTypedDispatch();

	const handleRemove = () => {
		dispatch(setBaseCoin(undefined));
	};

	return(
		<div id="selected-coin">
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
				>					
					<img src={baseCoin.thumb} alt={baseCoin.name} />
					<Button 
						value={baseCoin.name}
					>
						{baseCoin.name}
					</Button>
				</Stack>
				<Chip label="cancel" onDelete={handleRemove} />
			</Stack>
		</div>
	);
};

export default SelectedResult;
