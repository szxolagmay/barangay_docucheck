import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Issuance from "./pages/Issuance";

function App() {
  return (
    <Routes>
      {/* Default route HOLDER */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Issuance page */}
      <Route path="/issuance" element={<Issuance />} />
    </Routes>
  );
}

export default App;
