import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import MainReducer from './components/store/reducers/MainReducer';

ReactDOM.render(
  <Provider store={createStore(MainReducer, composeWithDevTools())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
