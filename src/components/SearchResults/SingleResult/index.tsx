import { SearchResult } from "../../SearchBar/slice";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

interface SingleResultProps {
    key: number;
    coin: SearchResult;

    handleSelectCoin: (e, selected: SearchResult) => void;
}

const SingleResult = ({ key, coin, handleSelectCoin }: SingleResultProps) => {
	return(
		<div key={key}>
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