
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/store';

// Create Redux store
const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <Provider store={store}> 
      <App />
  </Provider>,
  document.getElementById('root')
);
