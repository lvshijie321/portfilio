import { jsx as _jsx } from "react/jsx-runtime";
// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
_jsx(BrowserRouter, { children: _jsx(App, {}) })
// </React.StrictMode>,
);
