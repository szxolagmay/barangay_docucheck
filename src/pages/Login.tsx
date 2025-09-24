import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import NavbarLayout from "./Nlayout";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login Successful:", name);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden">
      <NavbarLayout>
        {/* Main Section */}
        <main className="flex flex-col items-center justify-center h-full px-4 pt-16">
          <motion.h2
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Barangay Log In
          </motion.h2>

          <p className="text-sm text-gray-400 mb-6">
            *This page is only for Barangay Officials
          </p>

          {/* Login Card */}
          <Card className="bg-blue-950 border-none shadow-xl rounded-2xl w-full max-w-2xl">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="bg-blue-700 p-3 rounded-full flex-shrink-0">
                <img
                  src="/images/SystemLogo.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-full"
                />
              </div>

              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-blue-900 text-white border-none focus:ring-2 focus:ring-blue-500"
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 bg-blue-900 text-white border-none focus:ring-2 focus:ring-blue-500"
              />
              <Button
                onClick={handleLogin}
                className="bg-blue-700 hover:bg-blue-600"
              >
                Log In
              </Button>
            </CardContent>
          </Card>

          {/* Notes */}
          <p className="text-gray-500 mt-8 leading-relaxed max-w-2xl text-center">
            sample notes sample notes sample notes sample notes sample notes
            sample notes sample notes sample notes sample notes sample notes
            sample notes sample notes sample notes sample notes sample notes
          </p>
        </main>
      </NavbarLayout>
    </div>
  );
}
