import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes";
import { GameProvider } from "./context/GameContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GameProvider>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </GameProvider>
);
