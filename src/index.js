import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style/index.css';
import App from './App';
//import reducer from './reducer/index';
import buttonclicktext from './reducer/buttonclicktext';
import registerServiceWorker from './registerServiceWorker';
let store = createStore(buttonclicktext);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
) 
registerServiceWorker();
