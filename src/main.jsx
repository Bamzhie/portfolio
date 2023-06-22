import React from "react";
import ReactDOM from "react-dom/client";
// index.js (or App.js)
import "tailwindcss/tailwind.css";
import "./index.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
