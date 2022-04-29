import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./containers/Home/Home";
import MobileNavigation from "./components/MobileNavigation";

const RouterSwitch = () => {
	return (
		<Router>
			<Routes>
				<Route path="/favourite/" element={<Home />}/>
				<Route path="/dash/" element={<Home />}/>
				<Route path="/" element={<Home />}/>
			</Routes>
			<MobileNavigation />
		</Router>
	);
};

export default RouterSwitch;
