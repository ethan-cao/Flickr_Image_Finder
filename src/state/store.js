import {createStore} from "redux";

import reducers from "../reducers";

export const initialState = {
}

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, initialState, enhancers);

export default store;