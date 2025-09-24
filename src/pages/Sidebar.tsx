import React from "react";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, FileText, ShieldAlert, Lock } from "lucide-react";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Login");
  };

  return (
    <aside className="w-60 bg-[#1a1a2e] flex flex-col justify-between p-4 text-white">
      {/* Top Section */}
      <div className="mt-22">

        <nav className="flex flex-col space-y-10 text-xl">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-4 ${
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
              }`
            }
          >
            <Home size={24} /> Dashboard
          </NavLink>

          <NavLink
            to="/issuance"
            className={({ isActive }) =>
              `flex items-center gap-4 ${
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
              }`
            }
          >
            <FileText size={24} /> Issuance
          </NavLink>

          <NavLink
            to="/audit"
            className={({ isActive }) =>
              `flex items-center gap-4 ${
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
              }`
            }
          >
            <FileText size={24} /> Audit Logs
          </NavLink>

          <NavLink
            to="/fraud"
            className={({ isActive }) =>
              `flex items-center gap-4 ${
                isActive ? "text-blue-400 font-semibold" : "hover:text-blue-400"
              }`
            }
          >
            <ShieldAlert size={24} /> Fraud Monitor
          </NavLink>
        </nav>
      </div>

      {/* Bottom Section (Logout) */}
      <div className="mb-4">
        <Button
          variant="secondary"
          onClick={handleLogout}
          className="w-full bg-blue-700 text-white hover:bg-blue-600 flex items-center gap-2"
        >
          <Lock className="w-4 h-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
