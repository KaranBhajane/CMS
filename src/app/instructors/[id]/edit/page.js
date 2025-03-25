"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const EditInstructor = () => {
  const { id } = useParams();
  const router = useRouter();
  const [instructor, setInstructor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    specialization: "",
    experience: "",
    contactNumber: "",
    address: "",
    coursesTaught: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Dummy Data (Replace with API call)
    const dummyInstructors = [
      {
        id: 1,
        firstName: "Shiv",
        lastName: "B",
        email: "shiv@example.com",
        dob: "1990-05-15",
        specialization: "React & Node.js",
        experience: "5 years",
        contactNumber: "9876543210",
        address: "123 Main St",
        coursesTaught: "React, Node.js, JavaScript",
      },
    ];

    const foundInstructor = dummyInstructors.find((inst) => inst.id === parseInt(id));
    if (foundInstructor) setInstructor(foundInstructor);
  }, [id]);

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
    
    console.log("Updated Instructor:", instructor);
    setTimeout(() => {
      alert("Instructor details updated successfully!");
      router.push(`/instructors`);
    }, 500);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Edit Instructor</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {[
          { label: "First Name", name: "firstName" },
          { label: "Last Name", name: "lastName" },
          { label: "Email", name: "email", type: "email" },
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Specialization", name: "specialization", colSpan: 2 },
          { label: "Experience", name: "experience" },
          { label: "Contact Number", name: "contactNumber" },
          { label: "Address", name: "address", colSpan: 2 },
          { label: "Courses Taught", name: "coursesTaught", colSpan: 2 },
        ].map(({ label, name, type = "text", colSpan }) => (
          <div key={name} className={`w-full ${colSpan ? "col-span-2" : ""}`}>
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
        <div className="col-span-2 flex justify-end gap-2 mt-4">
          <button type="button" onClick={() => router.push(`/instructors`)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditInstructor;