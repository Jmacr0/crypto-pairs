import React from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";

const MobileNavigation = () => {
	return(
		<Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation 
				showLabels
			>
				<BottomNavigationAction label="Fave" icon={<FavoriteIcon sx={{ fontSize: 25 }}/>} />
				<BottomNavigationAction label="Home" icon={<HomeIcon sx={{ fontSize: 25 }}/>} />
				<BottomNavigationAction label="Dash" icon={<DashboardIcon sx={{ fontSize: 25 }}/>} />
			</BottomNavigation>	
		</Paper>
	);
};

export default MobileNavigation;