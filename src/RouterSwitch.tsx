import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

const RouterSwitch = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<p>home</p>}/>
			</Routes>
		</Router>
	);
};

export default RouterSwitch;
