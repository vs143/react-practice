import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Redux from "./Redux";
import { Provider } from "react-redux";
import store from "./State/store";
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <App /> */}
    <Provider store={store}>
      <Redux />
    </Provider>
  </>
);
