import React from "react";
import ReactDOM from "react-dom/client";
import "./containers/App.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";

//importing card
// import Card from "./Card";
// import { robots } from "./robot";
// import CardList from "./CardList"
import App from './containers/App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
reportWebVitals();
