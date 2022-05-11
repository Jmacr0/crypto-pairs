import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorkerRegistration";

import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container); 

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

if(process.env.NODE_ENV === "production") serviceWorker.register();
if(process.env.NODE_ENV === "development") serviceWorker.unregister();