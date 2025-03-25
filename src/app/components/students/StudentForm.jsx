"use client";
import { useState } from "react";

const StudentForm = ({ onClose, onSave }) => {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    DateOfBirth: "",
    enrollmentDate: "",
    address: "",
    contactNumber: "",
    guardianName: "",
    guardianContact: "",
    emergencyContact: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(student).forEach((key) => {
      if (!student[key]) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Student Data:", student);
    onSave(student);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md p-4 text-gray-900">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">Add Student</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.keys(student).map((field, index) => (
            <div key={index} className={`flex flex-col ${errors[field] ? 'border-red-500' : ''}`}>
              <label className="text-sm font-medium mb-1 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={field.includes("Date") ? "date" : "text"}
                name={field}
                value={student[field]}
                onChange={handleChange}
                className={`p-2 border rounded w-full ${errors[field] ? 'border-red-500' : ''}`}
              />
              {errors[field] && <span className="text-red-500 text-sm mt-1">{errors[field]}</span>}
            </div>
          ))}

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

export default StudentForm;