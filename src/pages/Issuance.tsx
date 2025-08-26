import React from "react";
import "./Issuance.css";
import { Home, FileText, ShieldAlert, User } from "lucide-react";

const docs = [
  { title: "Barangay Clearance", img: "/docs/barangay-clearance.png" },
  { title: "Business Permit", img: "/docs/business-permit.png" },
  { title: "Certificate of Indigency", img: "/docs/indigency.png" },
  { title: "Certificate of Residency", img: "/docs/residency.png" },
];

const Issuance: React.FC = () => {
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
      

    <section>
      <h2 className="section-title">Issuance</h2>
      <div className="docs-grid">
        {docs.map((doc) => (
          <div key={doc.title} className="doc-card">
            <img src={doc.img} alt={doc.title} />
            <h3>{doc.title}</h3>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Issuance;
