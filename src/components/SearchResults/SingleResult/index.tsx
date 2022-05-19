import { SearchResult } from "../../SearchBar/slice";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface SingleResultProps {
    key: number;
	index: number;
    coin: SearchResult;

    handleSelectCoin: (e, selected: SearchResult) => void;
}

const SingleResult = ({ index, coin, handleSelectCoin }: SingleResultProps) => {
	return(
		<div key={index} style={{ paddingLeft: "0.5rem" }}>
			<Stack
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
			>	
				<img src={coin.thumb} alt={coin.name} />
				<Button 
					value={coin.name}
					onClick={(e)=>handleSelectCoin(e, coin)}
				>
					{coin.name}
				</Button>
			</Stack>
		</div>
	);
};

export default SingleResult;