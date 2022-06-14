import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import './app.css'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="section">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}
export default App;
