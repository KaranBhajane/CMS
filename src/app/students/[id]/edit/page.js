"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const EditStudent = () => {
  const { id } = useParams();
  const router = useRouter();
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    enrollmentDate: "",
    address: "",
    contactNumber: "",
    guardianName: "",
    guardianContact: "",
    emergencyContact: "",
    course: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Dummy Data (Replace with API call)
    const dummyStudents = [
      {
        id: 1,
        firstName: "Shiv",
        lastName: "B",
        email: "shive@example.com",
        dob: "1998-02-25",
        enrollmentDate: "2023-01-10",
        address: "123 Main St",
        contactNumber: "1234567890",
        guardianName: "Shiv's Dad",
        guardianContact: "9876543210",
        emergencyContact: "1112223333",
        course: "React",
      },
    ];

    const foundStudent = dummyStudents.find((s) => s.id === parseInt(id));
    if (foundStudent) setStudent(foundStudent);
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on input
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
    
    console.log("Updated Student:", student);
    setTimeout(() => {
      alert("Student details updated successfully!");
      router.push(`/students`);
    }, 500);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md text-gray-800">
      <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {[
          { label: "First Name", name: "firstName" },
          { label: "Last Name", name: "lastName" },
          { label: "Email", name: "email", type: "email" },
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Enrollment Date", name: "enrollmentDate", type: "date" },
          { label: "Address", name: "address", colSpan: 2 },
          { label: "Contact Number", name: "contactNumber" },
          { label: "Guardian Name", name: "guardianName" },
          { label: "Guardian Contact", name: "guardianContact" },
          { label: "Emergency Contact", name: "emergencyContact" },
          { label: "Course", name: "course", colSpan: 2 },
        ].map(({ label, name, type = "text", colSpan }) => (
          <div key={name} className={`w-full ${colSpan ? "col-span-2" : ""}`}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={student[name]}
              onChange={handleChange}
              className={`p-2 border rounded w-full ${errors[name] ? "border-red-500" : ""}`}
            />
            {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
          </div>
        ))}
        <div className="col-span-2 flex justify-end gap-2 mt-4">
          <button type="button" onClick={() => router.push(`/students`)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
