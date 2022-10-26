import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const store = configureStore({
  reducer: rootReducer
});

const EvensOrOdds = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default EvensOrOdds;
