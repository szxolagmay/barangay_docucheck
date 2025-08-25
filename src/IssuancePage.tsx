import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./components/ui/button";
import { Home, FileText, ShieldAlert, User } from "lucide-react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#0f0f1a] text-white">
      {/* Sidebar */}
      <aside className="w-60 bg-[#1a1a2e] flex flex-col p-4">
        <div className="text-lg font-bold mb-8">Barangay DocuCheck</div>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-2 hover:text-blue-400">
            <Home size={18} /> Dashboard
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <FileText size={18} /> Issuance
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <FileText size={18} /> Audit Logs
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <ShieldAlert size={18} /> Fraud Monitor
          </button>
          <button className="flex items-center gap-2 hover:text-blue-400">
            <User size={18} /> User
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center border-b border-gray-700 pb-4 mb-6">
          <nav className="flex gap-6 text-gray-300">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="text-blue-400">Home</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
          <span className="text-sm">August 10, 2025</span>
        </header>

        {/* Welcome */}
        <h1 className="text-2xl font-bold mb-6">Welcome, Barangay 227</h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-gray-400">Total Documents Issued</p>
              <p className="text-2xl font-bold">34</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-gray-400">Valid Documents</p>
              <p className="text-2xl font-bold">30</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-gray-400">Invalid Documents</p>
              <p className="text-2xl font-bold">4</p>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <div className="mb-6">
          <Card>
            <CardContent className="p-4 text-red-400 font-semibold">
              System Status: System detects suspicious patterns.
            </CardContent>
          </Card>
        </div>

        {/* Recent Issuance + Fraud Monitor */}
        <div className="grid grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-bold mb-4">Recent Issuance</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-2">Document Type</th>
                    <th className="pb-2">Date Issued</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Business Permit</td>
                    <td>2025-08-09</td>
                  </tr>
                  <tr>
                    <td>Certificate of Indigency</td>
                    <td>2025-08-07</td>
                  </tr>
                  <tr>
                    <td>Certificate of Residency</td>
                    <td>2025-08-08</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="font-bold mb-4">Fraud Monitor</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-400 text-left">
                    <th className="pb-2">Document Type</th>
                    <th className="pb-2">Checker Type</th>
                    <th className="pb-2">Date Issued</th>
                    <th className="pb-2">Time</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Barangay Clearance</td>
                    <td>Scanned QR</td>
                    <td>2025-08-10</td>
                    <td>12:05 PM</td>
                    <td className="text-red-400">Invalid QR</td>
                  </tr>
                  <tr>
                    <td>Barangay Clearance</td>
                    <td>Scanned QR</td>
                    <td>2025-08-10</td>
                    <td>12:06 PM</td>
                    <td className="text-red-400">Invalid QR</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;