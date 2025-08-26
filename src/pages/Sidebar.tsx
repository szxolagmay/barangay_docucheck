import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Home, FileText, ShieldAlert, User, Lock } from "lucide-react";

const Sidebar: React.FC = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/Login");
  };
  
  return (
    <aside className="w-60 bg-[#1a1a2e] flex flex-col p-4 text-white">
      <div className="text-lg font-bold mb-8">Barangay DocuCheck</div>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-400">
          <Home size={18} /> Dashboard
        </Link>

        <Link to="/issuance" className="flex items-center gap-2 hover:text-blue-400">
          <FileText size={18} /> Issuance
        </Link>

        <Link to="/audit-logs" className="flex items-center gap-2 hover:text-blue-400">
          <FileText size={18} /> Audit Logs
        </Link>

        <Link to="/fraud-monitor" className="flex items-center gap-2 hover:text-blue-400">
          <ShieldAlert size={18} /> Fraud Monitor
        </Link>

        <Link to="/user" className="flex items-center gap-2 hover:text-blue-400">
          <User size={18} /> User
        </Link>

        <Button
          variant="secondary"
          onClick={handleLogout}
          className="bg-blue-700 text-white hover:bg-blue-600 flex items-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Logout
        </Button>
      </nav>
    </aside>
  );
};

export default Sidebar;
