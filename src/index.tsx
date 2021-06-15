import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from "redux";

import './index.css';
import App from './App';
import currentReducer from "./reducers/current";
import { ICurrent } from "./types";

const store = createStore<ICurrent, any, any, any>(
  currentReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSIONS__ && (window as any).__REDUX_DEVTOOLS_EXTENSIONS__(),
  undefined,
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

