import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:8080/"
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN"
axios.defaults.headers.post['Content-Type'] = "application/json";
console.log("REACT_APP_BASE_URL",process.env.REACT_APP_BASE_URL)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
