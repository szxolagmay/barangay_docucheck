import React from "react";
import "./Issuance.css";

const docs = [
  { title: "Barangay Clearance", img: "/docs/barangay-clearance.png" },
  { title: "Business Permit", img: "/docs/business-permit.png" },
  { title: "Certificate of Indigency", img: "/docs/indigency.png" },
  { title: "Certificate of Residency", img: "/docs/residency.png" },
];

const Issuance: React.FC = () => {
  return (
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
  );
};

export default Issuance;
