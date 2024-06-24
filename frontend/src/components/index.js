
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from '../App';
import store from './store';

// Create Redux stor

ReactDOM.render(
  <Provider store={store}>
    
      <App />
  
  </Provider>,
  document.getElementById('root')
);
