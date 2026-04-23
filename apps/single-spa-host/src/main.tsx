import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { setupSingleSpa } from "./single-spa";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

setupSingleSpa();
