// import { createStore } from "redux";
// import rootReducer from "../reducers/index";
// const store = createStore(rootReducer);
// export default store;
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
}