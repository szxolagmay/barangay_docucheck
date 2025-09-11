import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { Upload, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PublicDocumentChecker() {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleBrgyLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center py-4 px-6 bg-blue-900 fixed top-0 left-0 z-50">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <img src="/logo.png" alt="Barangay Logo" className="w-8 h-8" /> Barangay DocuCheck
        </h1>
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#home" className="text-yellow-400 border-b-2 border-yellow-400">
            Home
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </nav>
        <Button
          onClick={handleBrgyLogin}
          variant="secondary"
          className="bg-blue-700 text-white hover:bg-blue-600"
        >
          Barangay Login
        </Button>
      </header>

      {/* Main Section */}
      <main className="mt-10 flex flex-col items-center justify-start">
        <motion.h2
          className="text-4xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Public Document Checker
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* DOCUMENT TYPE CHECKBOX */}
          <Card className="bg-gray-950 border-none shadow-xl rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Tick Document Type</h3>
            <div className="flex flex-col gap-3 text-gray-300">
              {[
                "Barangay Clearance",
                "Certificate of Residency",
                "Certificate of Indigency",
                "Business Permit",
              ].map((doc) => (
                <label key={doc} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    checked={selectedDoc === doc}
                    onCheckedChange={(checked) =>
                      checked === true ? setSelectedDoc(doc) : setSelectedDoc(null)
                    }
                  />
                  {doc}
                </label>
              ))}
            </div>
          </Card>

          {/* UPLOAD/SCAN QR */}
          <Card className="bg-gray-950 border-dashed border-2 border-gray-600 shadow-xl rounded-2xl flex flex-col justify-center items-center text-center p-6 gap-8">
            <div className="flex flex-col items-center gap-3">
              <Upload className="w-10 h-10 text-gray-400" />
              <p className="text-gray-300">Upload QR here</p>
              <Button variant="secondary" className="bg-blue-700 text-white hover:bg-blue-600">
                Upload QR
              </Button>
            </div>
            <div className="flex flex-col items-center gap-3">
              <QrCode className="w-10 h-10 text-gray-400" />
              <p className="text-gray-300">Scan QR here</p>
              <Button variant="secondary" className="bg-blue-700 text-white hover:bg-blue-600">
                Scan QR
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
