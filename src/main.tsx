import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maker from "./Maker.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/anything/" Component={App} />
        <Route path="/anything/create" Component={Maker} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
