import {compose, createStore} from "redux";
import {nameReducer} from "./reducers/rootReducer";

export const store = createStore(nameReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));