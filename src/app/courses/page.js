"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaEye, FaEdit, FaTrash, FaTimes } from "react-icons/fa"; // FontAwesome Icons

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "React.js", duration: "3 Months", fee: "₹5000", description: "A course on React.js for frontend development. " },
    { id: 2, name: "Node.js", duration: "4 Months", fee: "₹6000", description: "Learn backend development with Node.js." },
    { id: 3, name: "Python", duration: "5 Months", fee: "₹8000", description: "Comprehensive Python programming course." },
    { id: 4, name: "Angular", duration: "3 Months", fee: "₹5500", description: "Master Angular for frontend development." },
    { id: 5, name: "Django", duration: "4 Months", fee: "₹7000", description: "Learn Django for building robust web applications." },
    { id: 6, name: "Vue.js", duration: "3 Months", fee: "₹5000", description: "Understand Vue.js for interactive UIs." },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null); // Store selected course
  const router = useRouter();

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className={`p-4 md:p-6 rounded-xl shadow-lg max-w-7xl mx-auto mt-6 transition-all ${
        selectedCourse ? "bg-gray-900 bg-opacity-50" : "bg-gray-50"
      }`}
    >
      {/* Header Section */}
      <div className={`flex flex-wrap md:flex-nowrap justify-between items-center mb-6 gap-4 transition-all ${selectedCourse ? "opacity-50 pointer-events-none" : "opacity-100"}`}>
        <h1 className="text-2xl md:text-3xl font-bold text-[#7e3af2]">Course Management</h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push("/courses/addCourses")}
          className="flex items-center bg-gradient-to-r from-[#7e3af2] to-cyan-500 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition"
        >
          + Add Course
        </motion.button>
      </div>

      {/* Scrollable Table Container (Fix scrollbar issue) */}
      {!selectedCourse && (
        <div className="relative rounded-lg border border-gray-200 overflow-hidden">
          <div className="max-h-96 overflow-y-auto scrollbar-hide">
            <table className="w-full min-w-[600px] bg-white text-gray-700">
              {/* Table Head (Fixed) */}
              <thead className="bg-gradient-to-r from-[#7e3af2] to-cyan-500 text-white sticky top-0 z-10">
                <tr>
                  <th className="p-3 text-center">Sr.No</th>
                  <th className="p-3 text-left">Course Name</th>
                  <th className="p-3 text-left">Duration</th>
                  <th className="p-3 text-left">Course Fee</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {courses.map((course, index) => (
                  <motion.tr 
                    key={course.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-200 hover:bg-gray-100 transition"
                  >
                    <td className="p-3 text-center">{index + 1}</td>
                    <td className="p-3">{course.name}</td>
                    <td className="p-3">{course.duration}</td>
                    <td className="p-3">{course.fee}</td>
                    <td className="p-3 flex justify-center space-x-3 md:space-x-4">
                      
                      {/* View Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, color: "#3b82f6" }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-600 transition cursor-pointer"
                        title="View Course"
                        onClick={() => setSelectedCourse(course)}
                      >
                        <FaEye size={20} />
                      </motion.div>

                      {/* Edit Icon */}
                      <motion.div
                        whileHover={{ scale: 1.2, color: "#22c55e" }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-600 transition cursor-pointer"
                        title="Edit Course"
                      >
                        <FaEdit size={20} />
                      </motion.div>

                      {/* Delete Icon */}
                      <motion.button
                        whileHover={{ scale: 1.2, color: "#ef4444" }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-600 transition cursor-pointer"
                        title="Delete Course"
                        onClick={() => handleDelete(course.id)}
                      >
                        <FaTrash size={20} />
                      </motion.button>

                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View Course Details Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-60 p-4 z-100">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-3xl relative"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#7e3af2] mx-auto">
                {selectedCourse.name} Details
              </h2>
              <button onClick={() => setSelectedCourse(null)} className="text-gray-600 hover:text-red-500">
                <FaTimes size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="text-black text-lg"><strong>Course Name:</strong> {selectedCourse.name}</p>
              <p className="text-black text-lg"><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p className="text-black text-lg"><strong>Fee:</strong> {selectedCourse.fee}</p>
              <p className="text-black text-lg"><strong>Description:</strong> {selectedCourse.description.slice(0,100)}</p>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default CourseManagement;
