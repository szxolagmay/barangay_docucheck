import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Issuance from "./pages/Issuance";
import BarangayClearance from "./pages/BarangayClearanceForm";


function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Home / Dashboard */}
      <Route path="/Dashboard" element={<Dashboard />} />

      {/* Issuance page */}
      <Route path="/issuance" element={<Issuance />} />

      {/* Barangay Clearance page */}
      <Route path="/barangay-clearance" element={<BarangayClearance />} />
    </Routes>
  );
}

export default App;
