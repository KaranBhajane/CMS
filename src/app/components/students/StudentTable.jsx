"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEdit, FaTrash, FaBook } from "react-icons/fa";

const StudentTable = ({ students, onAddStudent, onDeleteStudent }) => {
  const [hoveredStudent, setHoveredStudent] = useState(null);
  const [studentList, setStudentList] = useState(students);

  const handleDeleteStudent = (id) => {
    const updatedList = studentList.filter((student) => student.id !== id);
    setStudentList(updatedList);
    onDeleteStudent(id);
  };

  return (
    <motion.div 
      className="w-full p-6"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#7e3af2]">Students List</h2>
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-lg">
        <table className="w-full text-gray-700">
          <thead>
            <tr className="border-b bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
              <th className="py-4 px-4 text-center">Sr. No</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Courses</th>
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => (
              <motion.tr
                key={student.id}
                className="border-b hover:bg-gray-50 transition"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <td className="py-4 px-4 text-center">{index + 1}</td>
                <td className="py-4 px-6">{student.name}</td>

                {/* Hover Courses Popup */}
                <td
                  className="py-4 px-6 relative cursor-pointer text-blue-500 underline"
                  onMouseEnter={() => setHoveredStudent(student.id)}
                  onMouseLeave={() => setHoveredStudent(null)}
                >
                  View Courses
                  <AnimatePresence>
                    {hoveredStudent === student.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-56 p-4 z-50"
                      >
                        <h3 className="text-lg font-semibold mb-2">Courses:</h3>
                        {student.courses && student.courses.length > 0 ? (
                          <ul className="list-disc pl-4 text-gray-700">
                            {student.courses.map((course, idx) => (
                              <li key={idx} className="py-1">{course}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-500">No courses assigned</p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </td>

                {/* Status Dropdown */}
                <td className="py-4 px-6">
                  <select className="border rounded px-2 py-1" defaultValue={student.status || "Active"}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Dropped">Dropped</option>
                    <option value="Terminated">Terminated</option>
                  </select>
                </td>

                {/* Actions */}
                <td className="py-4 px-6 flex justify-center space-x-4">
                  <Link href={`/students/${student.id}`} title="View Student">
                    <motion.div
                      whileHover={{ scale: 1.2, color: "#3b82f6" }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 transition"
                    >
                      <FaEye size={20} />
                    </motion.div>
                  </Link>

                  <Link href={`/students/${student.id}/edit`} title="Edit Student">
                    <motion.div
                      whileHover={{ scale: 1.2, color: "#22c55e" }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 transition"
                    >
                      <FaEdit size={20} />
                    </motion.div>
                  </Link>

                  <motion.button
                    whileHover={{ scale: 1.2, color: "#ef4444" }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-600 transition"
                    title="Delete Student"
                    onClick={() => handleDeleteStudent(student.id)}
                  >
                    <FaTrash size={20} />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default StudentTable;
