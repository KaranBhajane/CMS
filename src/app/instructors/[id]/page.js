"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft, FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";

const InstructorDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const [instructor, setInstructor] = useState({
    id: 1,
    name: "Amar",
    email: "Amar@example.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
    specialization: "Full Stack Development",
    courses: ["React", "Node.js", "MongoDB"],
    experience: "5 years",
    joiningDate: "2022-01-15",
  });

  if (!instructor) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

  return (
    <motion.div 
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-4"
        onClick={() => router.back()}
      >
        <FaArrowLeft className="mr-2" /> Back
      </motion.button>

      {/* Instructor Info */}
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <FaUser className="mr-2 text-blue-500" /> {instructor.name}
        </h2>
        <p className="text-gray-600">{instructor.email}</p>
        <p className="text-gray-600">{instructor.phone}</p>
      </div>

      {/* Specialization */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FaChalkboardTeacher className="mr-2 text-green-500" /> Specialization
        </h3>
        <p className="text-gray-700">{instructor.specialization}</p>
      </div>

      {/* Courses Taught */}
      <div>
        <h3 className="text-lg font-semibold flex items-center">
          <FaBook className="mr-2 text-yellow-500" /> Courses Taught
        </h3>
        <ul className="mt-2 text-gray-700 list-disc pl-5">
          {instructor.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default InstructorDetails;
