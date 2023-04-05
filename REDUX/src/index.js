import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import Store from './store';

const data=createStore(Store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={data}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  
);
reportWebVitals();
