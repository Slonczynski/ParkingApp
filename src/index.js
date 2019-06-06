import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './components/store/reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, composeWithDevTools())}>
    <App />
  </Provider>,
  document.getElementById('root')
);
