import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {legacy_createStore as createStore} from "redux";
import reducer from "./reducer/index"
import toastr from "toastr";

axios.defaults.baseURL =
  process.env.REACT_APP_BASE_URL || "http://localhost:8080/";

axios.defaults.headers.common["Authorization"] =
  localStorage.getItem("auth_token");
axios.defaults.headers.post["Content-Type"] = "application/json";
toastr.options.closeButton = true;
toastr.options.closeHtml = '<button><i class="icon-off"></i></button>';
toastr.options.closeMethod = "fadeOut";
toastr.options.closeDuration = 500;
toastr.options.closeEasing = "swing";
toastr.options.progressBar = true;

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
