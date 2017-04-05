// file: ./src/index.js
'use strict';

// Import React/Redux dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// get the reducers
import reducers from './reducers';

// get the containers/components
import App from './components/app';

ReactDOM.render(
  <Provider store={ createStore(reducers) }>
    <App />
  </Provider>
  , document.querySelector('#app'));
