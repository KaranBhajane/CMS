"use client";
import { useState, useEffect } from "react";
import StudentTable from "../components/students/StudentTable";

const StudentsPage = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     // API Placeholder
//     fetch("/api/students") 
//       .then((res) => res.json())
//       .then((data) => setStudents(data));
//   }, []);

const [students, setStudents] = useState([
    { id: 1, name: "Shiv B", course: "React", feePaid: 5000 },
    { id: 2, name: "Karan B", course: "Node.js", feePaid: 4000 },
    { id: 3, name: "Bhaskar", course: "Next.js", feePaid: 6000 },
    { id: 4, name: "Syed", course: "Node.js", feePaid: 4000 },
    { id: 5, name: "Piyush", course: "Node.js", feePaid: 4000 },


  ]);

  return (
    <div>
      <StudentTable students={students} />
    </div>
  );
};

export default StudentsPage;
