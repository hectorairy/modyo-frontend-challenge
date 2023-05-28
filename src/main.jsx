import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryGameApp } from "./MemoryGameApp";
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MemoryGameApp />
  </React.StrictMode>
);
