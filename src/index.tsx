import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorkerRegistration";

import { Provider } from "react-redux";
import store from "./store/store";

import { ThemeProvider }from "@mui/material/styles";
import theme from "./globalTheme";
import "./_base.scss";

const container = document.getElementById("root");
const root = createRoot(container); 

root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);

if(process.env.NODE_ENV === "production") serviceWorker.register();
if(process.env.NODE_ENV === "development") serviceWorker.unregister();