import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./Pages/HomePage";
import FilesPage from "./Pages/FilesPage";
import "./Firebase/firebase";
import AuthProvider from "./Context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <App>
        <HomePage />
      </App>
    </React.StrictMode>
  </AuthProvider>
);
