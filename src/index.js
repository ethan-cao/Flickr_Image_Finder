import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/main.scss";

import store from "./state/store";
import registerServiceWorker from "./registerServiceWorker";

import Navbar from "./components/Navbar";
import AppContainer from "./container/AppContainer";

const loadApp = (container) => {
	ReactDOM.render(
		<Provider store={store}>  
			<AppContainer></AppContainer>
		</Provider>, 
		container
	);
};

// registerServiceWorker();

export default loadApp;