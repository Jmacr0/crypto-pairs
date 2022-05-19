
import { useState } from "react";

import { useTypedSelector } from "../../../store/hooks";
import { PairCoin } from "../../SearchBar/slice";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Chip from "@mui/material/Chip";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowUpIcon from "@mui/icons-material/ArrowDropUp";

import "./index.css";
import { Stack } from "@mui/material";

interface PairResultProps {
    index: number;
    coin: PairCoin;
}

const PairResult = ({ index, coin }: PairResultProps)=> {

	const [expanded, setExpanded] = useState<string|boolean>(false);

	const baseCoin = useTypedSelector((state) => state.searchBar.baseCoin);

	const handleExpand = (panel: string) => (_e: React.SyntheticEvent, isExpanded: string | boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return(
		<div key={index}>
			<Accordion 
				square 
				disableGutters 
				expanded={expanded === `panel-${index}`} 
				sx={{ backgroundColor: expanded === `panel-${index}` && "aliceblue" }}
				onChange={handleExpand(`panel-${index}`)}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls={`panel-${index}-content`}
					id={`panel-${index}-header`}
					sx={{ 
						paddingLeft: "0.5rem", 
						"& .MuiAccordionSummary-content": {
							justifyContent: "space-between",
						}, 
					}}
				>
					<Stack
						direction="row"
						alignItems="center"
					>
						<img 
							src={baseCoin.thumb} 
							alt={baseCoin.name + "-image"}
							height={25}
							className="coin-img"
						/>
						<img 
							src={coin.image} 
							alt={coin.name + "-image"} 
							height={25}
							className="coin-img"
						/>
						<Typography variant="button" component="p">
							{baseCoin.symbol + " / " + coin.symbol.toLocaleUpperCase()}
						</Typography>
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
					>
						<Chip label="H" />
						<Chip label="D" />
					</Stack>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="h4">
						<div>{coin.current_price.toFixed(4)}</div>
					</Typography>
					<Typography component="div">
						<div>
							<Chip 
								color={coin.price_change_percentage_1h_in_currency > 0 ? "success" : "error"} 
								icon={coin.price_change_percentage_1h_in_currency > 0 ? <ArrowUpIcon /> : <ArrowDownIcon/>} 
								label={`${coin.price_change_percentage_1h_in_currency.toFixed(2)}%  1H`} 
							/>
						</div>
						<div>
							<Chip 
								color={coin.price_change_percentage_24h_in_currency > 0 ? "success" : "error"} 
								icon={coin.price_change_percentage_24h_in_currency > 0 ? <ArrowUpIcon /> : <ArrowDownIcon/>} 
								label={`${coin.price_change_percentage_24h_in_currency.toFixed(2)}%  24H`} 
							/>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default PairResult;