import React from "react";
import ReactDom from "react-dom";
import App from './App';
import {Provider} from "react-redux";
import store from './store';
import '../node_modules/bulma/css/bulma.min.css';

ReactDom.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);