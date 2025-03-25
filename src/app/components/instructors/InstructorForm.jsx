"use client";
import { useState } from "react";

const InstructorForm = ({ onClose, onSave }) => {
  const [instructor, setInstructor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    hireDate: "",
    address: "",
    contactNumber: "",
    specialization: "",
    experience: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Instructor Data:", instructor);
    onSave(instructor);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md p-4 text-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add Instructor</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={instructor.firstName}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={instructor.lastName}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={instructor.email}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={instructor.dob}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Hire Date */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Hire Date</label>
            <input
              type="date"
              name="hireDate"
              value={instructor.hireDate}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Address */}
          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={instructor.address}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={instructor.contactNumber}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Specialization */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={instructor.specialization}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Experience */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={instructor.experience}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Emergency Contact */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Emergency Contact</label>
            <input
              type="text"
              name="emergencyContact"
              value={instructor.emergencyContact}
              onChange={handleChange}
              className="p-2 border rounded w-full"
              required
            />
          </div>

          {/* Buttons */}
          <div className="sm:col-span-2 flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InstructorForm;
