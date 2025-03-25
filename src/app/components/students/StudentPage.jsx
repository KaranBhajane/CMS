"use client";
import { useState, useEffect } from "react";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Placeholder for API fetch
    setStudents([
      { id: 1, name: "Karan B", email: "karan@example.com", course: "React" },
      { id: 2, name: "Piyush", email: "piyush@example.com", course: "Node.js" },
    ]);
  }, []);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
    setIsFormOpen(false);
    // Redirect to Payment Page (Replace with Next.js routing later)
    console.log("Redirecting to Payment Page with:", newStudent);
  };

  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-2xl font-bold">Students</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setIsFormOpen(true)}
        >
          Add Student
        </button>
        {showForm && <StudentForm onClose={() => setShowForm(false)} onSubmit={handleAddStudent} />}
      </div>

      <StudentTable students={students} />

      {isFormOpen && (
        <StudentForm onClose={() => setIsFormOpen(false)} onSubmit={handleAddStudent} />
      )}
    </div>
  );
};

export default StudentsPage;
