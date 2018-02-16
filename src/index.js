import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import './style/index.css';
import App from './App';
import reducer from './reducer';
import buttonclicktext from './reducer/buttonclicktext';
import registerServiceWorker from './registerServiceWorker';
const middleware = [thunk];
let store = createStore(buttonclicktext, applyMiddleware(...middleware));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
) 
registerServiceWorker();
