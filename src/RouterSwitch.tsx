import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Fave from "./containers/Fave/Fave";
import Dash from "./containers/Dash/Dash";
import Home from "./containers/Home/Home";
import MobileNavigation from "./components/MobileNavigation";

const RouterSwitch = () => {
	return (
		<Router basename={process.env.BASE_URL}>
			<Routes>
				<Route path="/favourite" element={<Fave />}/>
				<Route path="/dash" element={<Dash />}/>
				<Route path="/" element={<Home />}/>
			</Routes>
			<MobileNavigation />
		</Router>
	);
};

export default RouterSwitch;
