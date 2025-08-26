import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const menuItems = [
    "Dashboard",
    "Issuance",
    "Audit Logs",
    "Fraud Monitor",
    "User",
  ];

  return (
    <aside className="sidebar">
      <h1 className="logo">Barangay DocuCheck</h1>
      <nav>
        {menuItems.map((item) => (
          <button key={item} className="sidebar-btn">
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
