import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";
import reducer from "./reducer/index"

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:8080/"
axios.defaults.headers.common['Authorization'] = "AUTH TOKEN"
axios.defaults.headers.post['Content-Type'] = "application/json";
const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);
reportWebVitals();
