import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./Components/Sidebar/Sidebar";
import reportWebVitals from "./reportWebVitals";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Sidebar />
  </React.StrictMode>
);

reportWebVitals();
