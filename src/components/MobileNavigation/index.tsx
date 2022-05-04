import React from "react";
import { useNavigate } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";

const MobileNavigation = () => {
	// React-router hook to change URL.
	const navigate = useNavigate();

	const handleNavigationChange = (_e: React.ChangeEvent<HTMLInputElement>, index: number) => {
		switch (index) {
		case 0:
			navigate("/favourite");
			break;
		case 1:
			navigate("/");
			break;
		case 2:
			navigate("/dash");
			break;
		default:
			break;
		}
	};

	return(
		<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation 
				showLabels
				onChange={handleNavigationChange}
			>
				<BottomNavigationAction label="Fave" icon={<FavoriteIcon sx={{ fontSize: 25 }}/>} />
				<BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 25 }}/>} />
				<BottomNavigationAction label="Dash" icon={<DashboardIcon sx={{ fontSize: 25 }}/>} />
			</BottomNavigation>	
		</Paper>
	);
};

export default MobileNavigation;
