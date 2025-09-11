import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Fcertindigency() {
  const navigate = useNavigate(); 
  
  const [formData, setFormData] = useState({
    LastName: "",
    FirstName: "",
    MiddleName: "",
    Address: "",
    Age: "",
    Birthdate: "",
    ContactNumber: "",
    Gender: "",
    Purpose: "",
    issuedOn: "",
  });

  const handleBack = () => {
    navigate("/issuance");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Certificate of Indigency Form</h1>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Last Name</label>
          <input
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">First Name</label>
          <input
            type="text"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* Middle Name */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Middle Name</label>
          <input
            type="text"
            name="MiddleName"
            value={formData.MiddleName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Address</label>
          <input
            type="text"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Age</label>
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* Birthdate */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Birthdate</label>
          <input
            type="date"
            name="Birthdate"
            value={formData.Birthdate}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Contact Number</label>
          <input
            type="text"
            name="ContactNumber"
            value={formData.ContactNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Gender</label>
          <select
            name="Gender"
            value={formData.Gender}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Purpose */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Purpose</label>
          <input
            type="text"
            name="Purpose"
            value={formData.Purpose}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* Issued On */}
        <div className="mb-6">
          <label className="block font-semibold mb-1">Issued On</label>
          <input
            type="date"
            name="issuedOn"
            value={formData.issuedOn}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded bg-gray-800 text-gray-300"
          />
        </div>

        {/* Buttons functios */}
        <div className="flex justify-between">
          <button onClick={handleBack} className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500">
            Back
          </button>
          <button className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-500">
            Fill-Out Done
          </button>
        </div>
      </div>
    </div>
  );
}
