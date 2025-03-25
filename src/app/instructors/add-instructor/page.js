"use client";
import { useState } from "react";

const AddInstructor = () => {
  const [instructor, setInstructor] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(instructor).forEach((key) => {
      if (!instructor[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("New Instructor:", instructor);
    alert("Instructor added successfully!");
    setInstructor({ name: "", email: "", phone: "", expertise: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded max-w-md mx-auto">
      {[{ label: "Name", name: "name" },
        { label: "Email", name: "email", type: "email" },
        { label: "Phone", name: "phone" },
        { label: "Expertise", name: "expertise" }].map(({ label, name, type = "text" }) => (
        <div key={name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">{label}</label>
          <input
            type={type}
            name={name}
            value={instructor[name]}
            onChange={handleChange}
            className={`p-2 border rounded w-full ${errors[name] ? "border-red-500" : ""}`}
          />
          {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
        </div>
      ))}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Add Instructor</button>
    </form>
  );
};

export default AddInstructor;
