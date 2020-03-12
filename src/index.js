import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/main.scss";

import store from "./state/store";
import registerServiceWorker from "./registerServiceWorker";

const loadApp = (container) => {
	ReactDOM.render(
		<Provider store={store}>  
			<div>Hi</div>
		</Provider>, 
		container
	);
};

// registerServiceWorker();

export default loadApp;