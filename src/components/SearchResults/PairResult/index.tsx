
import { useState } from "react";

import { useTypedSelector } from "../../../store/hooks";
import { PairCoin } from "../../SearchBar/slice";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowUpIcon from "@mui/icons-material/ArrowDropUp";

import "./index.scss";

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
						{coin.image ?
							<img 
								src={coin.image} 
								alt={coin.name + "-image"} 
								height={25}
								className="coin-img"
							/>
							:
							<Chip 
								label={coin.symbol.charAt(0).toUpperCase()}
								style={{ marginRight: "0.25rem" }}
							/>
						}
						<Typography variant="button" component="p">
							{baseCoin.symbol + " / " + coin.symbol.toUpperCase()}
						</Typography>
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
					>
						{Boolean(coin.price_change_percentage_1h_in_currency) &&
							<Chip label="H" className={setColor(coin.price_change_percentage_1h_in_currency)}/>
						}	
						<Chip label="D" className={setColor(coin.price_change_percentage_24h_in_currency)}/>
						<Chip label="W" className={setColor(coin.price_change_percentage_7d_in_currency)}/>
					</Stack>
				</AccordionSummary>
				<AccordionDetails>
					<Typography variant="h4">
						<div>
							{parseFloat(coin.current_price.toFixed(4)) <= 0 ? coin.current_price :coin.current_price.toFixed(4)}
						</div>
					</Typography>
					<Typography component="div">
						{Boolean(coin.price_change_percentage_1h_in_currency) &&
							<div>
								<Chip 
									icon={coin.price_change_percentage_1h_in_currency > 0 ? <ArrowUpIcon /> : <ArrowDownIcon/>} 
									label={`${coin.price_change_percentage_1h_in_currency.toFixed(2)}%  1H`} 
									className={setColor(coin.price_change_percentage_1h_in_currency)}
								/>
							</div>
						}
						<div>
							<Chip 
								icon={coin.price_change_percentage_24h_in_currency > 0 ? <ArrowUpIcon /> : <ArrowDownIcon/>} 
								label={`${coin.price_change_percentage_24h_in_currency.toFixed(2)}%  24H`} 
								className={setColor(coin.price_change_percentage_24h_in_currency)}
							/>
						</div>
						<div>
							<Chip 
								icon={coin.price_change_percentage_7d_in_currency > 0 ? <ArrowUpIcon /> : <ArrowDownIcon/>} 
								label={`${coin.price_change_percentage_7d_in_currency.toFixed(2)}%  7D`} 
								className={setColor(coin.price_change_percentage_7d_in_currency)}
							/>
						</div>
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

const setColor =(percent: number) => {
	let color;
	if(percent > 3) color = "up bg alot";
	if(percent > 2 && percent < 3) color = "up bg abit";
	if(percent > 0 && percent< 2) color = "up bg alil";
	if(percent < 0 && percent > -2) color = "down bg alil";
	if(percent < -2 && percent > -3) color = "down bg abit";
	if(percent < -3) color = "down bg alot";

	return color;
};

export default PairResult;