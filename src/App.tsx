import { Routes, Route, Navigate } from "react-router-dom";
import DocuCheck from "./pages/DocuCheck";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Issuance from "./pages/Issuance";
import Temp from "./pages/temp";

function App() {
  return (
      <Routes>
        {/* Default route HOLDER */}
        <Route path="/" element={<Navigate to="/docucheck" replace />} />

        {/* Docucheck */}
        <Route path="/docucheck" element={<DocuCheck />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Issuance page */}
        <Route path="/issuance" element={<Issuance />} />

        {/* TEMPORARY PAGE */}
        <Route path="/temp" element={<Temp />} />
      </Routes>
  );
}

export default App;
