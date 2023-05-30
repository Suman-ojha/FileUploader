import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
const App = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-3">{children}</div>
    </>
  );
};

export default App;
