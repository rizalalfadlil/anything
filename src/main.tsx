import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Maker from "./Maker.tsx";
import { BaseLayout } from "./components/baseLayout.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BaseLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={App} />
          <Route path="/create" Component={Maker} />
        </Routes>
      </BrowserRouter>
    </BaseLayout>
  </StrictMode>
);
