import React from 'react';
import ReactDOM from 'react-dom';
import * as dayjs from 'dayjs';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import './styles/css/main.css';
import App from './App';
import store from './configureStore.js';

dayjs.locale('ru');

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
