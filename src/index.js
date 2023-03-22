import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LangToggleProvider } from "./context/langToggleContext";

ReactDOM.render(
  <React.StrictMode>
    <LangToggleProvider>
      <App />
    </LangToggleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
