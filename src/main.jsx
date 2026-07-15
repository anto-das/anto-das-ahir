import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// 1. AOS Packages Import Korun
import AOS from "aos";
import "aos/dist/aos.css";

// 2. Client Engine initialization setup call korun (Ati baddhotamulok)
AOS.init({
  duration: 900, // Animation speed millisecond-e (900ms)
  once: true, // Scroll korle animation sudhu ekbar-i hobe
  easing: "ease-out", // Acceleration pattern smoothness setup
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
