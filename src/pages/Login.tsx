import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function BarangayLogin() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Barangay Code Entered:", code);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center py-4 px-6 bg-blue-900 fixed top-0 left-0 z-50">
        <h1 className="text-lg font-bold flex items-center gap-2">
          <img src="https://drive.google.com/uc?export=view&id=14wmqCy4p3wnRK4lj1MemN3quoF_Usadz" alt="Logo" className="w-8 h-8" /> Barangay DocuCheck
        </h1>
        <nav className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#home" className="text-yellow-400 border-b-2 border-yellow-400">Home</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <Button variant="secondary" className="bg-blue-700 text-white hover:bg-blue-600">
          Barangay Login
        </Button>
      </header>

      {/* Main Section */}
      <main className="mt-24 w-full max-w-2xl text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Barangay Log In
        </motion.h2>
        <p className="text-sm text-gray-400 mb-6">
          *This page is only for Barangay Officials
        </p>

        <Card className="bg-blue-950 border-none shadow-xl rounded-2xl">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="bg-blue-700 p-3 rounded-full">
              <img src="https://drive.google.com/uc?export=view&id=14wmqCy4p3wnRK4lj1MemN3quoF_Usadz" alt="Logo" className="w-12 h-12 rounded-full" />
            </div>
            <Input
              type="text"
              placeholder="Enter Barangay Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 bg-blue-900 text-white border-none focus:ring-2 focus:ring-blue-500"
            />
            <Button onClick={handleLogin} className="bg-blue-700 hover:bg-blue-600">
              Log In
            </Button>
          </CardContent>
        </Card>

        <p className="text-gray-500 mt-10 leading-relaxed">
          sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes sample notes
        </p>
      </main>
    </div>
  );
}