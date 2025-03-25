"use client";
import { useState, useEffect } from "react";
import InstructorTable from "../components/instructors/InstructorTable";

const InstructorsPage = () => {
  // const [instructors, setInstructors] = useState([]);

  // useEffect(() => {
  //   // API Placeholder
  //   fetch("/api/instructors") 
  //     .then((res) => res.json())
  //     .then((data) => setInstructors(data));
  // }, []);

  const [instructors, setInstructors] = useState([
    { id: 1, name: "Amar", subject: "React", experience: "5 years" },
    { id: 2, name: "Akhbar", subject: "Node.js", experience: "4 years" },
    { id: 3, name: "Athony", subject: "Next.js", experience: "6 years" },
  ]);

  return (
    <div>
      <InstructorTable instructors={instructors} />
    </div>
  );
};

export default InstructorsPage;