import React from "react";
import MobileNavigation from "./components/MobileNavigation";
import RouterSwitch from "./RouterSwitch";

const App = () =>{
	return (
		<>
			<h1>
                Welcome to React App thats build using Webpack and Babel separately
			</h1>
			<RouterSwitch />
			<MobileNavigation />
		</>
	);
};

export default App;