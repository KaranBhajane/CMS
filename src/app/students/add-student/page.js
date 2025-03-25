"use client";
import { useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, course });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded">
      <input className="border p-2 w-full mb-4" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 w-full mb-4" placeholder="Course" onChange={(e) => setCourse(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default AddStudent;
