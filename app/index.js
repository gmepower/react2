import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import App from "./container/app";
import {create} from './store/index'
let store=create();
render(
    <Provider store={store}>
    <App/>
    </Provider>
    ,document.getElementById('root'));