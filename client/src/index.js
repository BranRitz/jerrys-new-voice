import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App";
import reducer from './store/reducers/Auth';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import { Provider } from 'react-redux';

const composeEnhances = window.__REDUX__DEVTOOLS__EXTENSION__COMPOSE__ || compose
const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
