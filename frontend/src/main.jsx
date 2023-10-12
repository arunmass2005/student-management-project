import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './assets/global.css'
import { BrowserRouter as Router , Routes,Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("body")).render(
  <Router >
      <App />
  </Router>

    
);
