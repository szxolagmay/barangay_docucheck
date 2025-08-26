import React, { useState } from "react";

interface FormData {
  name: string;
  address: string;
  day: string;
  month: string;
  year: string;
}

const BarangayClearanceForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    address: "",
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, log form data
    console.log("Form submitted:", form);
    alert("Barangay Clearance form submitted!");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", background: "#1a1a2e", color: "white", borderRadius: "10px" }}>
      <h2 style={{ marginBottom: "15px" }}>Barangay Clearance Certificate</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Name */}
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        {/* Address */}
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </label>

        {/* Day */}
        <label>
          Day of Issue:
          <input
            type="number"
            name="day"
            min="1"
            max="31"
            value={form.day}
            onChange={handleChange}
            required
          />
        </label>

        {/* Month */}
        <label>
          Month of Issue:
          <select name="month" value={form.month} onChange={handleChange} required>
            <option value="">Select month</option>
            {[
              "January","February","March","April","May","June",
              "July","August","September","October","November","December"
            ].map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        {/* Year */}
        <label>
          Year of Issue:
          <input
            type="number"
            name="year"
            min="1900"
            max="2100"
            value={form.year}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BarangayClearanceForm;
