import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Issuance from "./Issuance";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <main className="page-content">
          <Issuance />
        </main>
      </div>
    </div>
  );
};

export default App;

