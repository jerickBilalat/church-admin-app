
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    
    <Provider store={store}><App /></Provider>,
     document.querySelector('#root')
    
);