import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
//context
import NexterContextProvider from "./context/store";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <NexterContextProvider>
      <App />
    </NexterContextProvider>
  </React.StrictMode>
);
