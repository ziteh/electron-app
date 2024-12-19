import React from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App";
import "@src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Use contextBridge
window.ipcRenderer.on("mainProcessMessage", (_event, message) => {
  console.log(message);
});
