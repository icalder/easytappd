import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader } from "./lib/loader.ts";
import Settings from "./pages/Settings.tsx";
import { saveSettings } from "./lib/settings.ts";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: loader,
  },
  {
    path: "/settings",
    element: <Settings />,
    action: saveSettings,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
