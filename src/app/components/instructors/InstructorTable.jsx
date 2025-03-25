"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const InstructorTable = ({ instructors, onAddInstructor, onDeleteInstructor }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hoveredInstructor, setHoveredInstructor] = useState(null); // Track hovered instructor
  const [instructorList, setInstructorList] = useState(instructors);

  const handleDeleteInstructor = (id) => {
    onDeleteInstructor(id);
  };
  const handleStatusChange = async (id, newStatus) => {
    setInstructorList((prevList) =>
      prevList.map((instructor) =>
        instructor.id === id ? { ...instructor, status: newStatus } : instructor
      )
    );
    alert("Are You Sure!")
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
        <h2 className="text-2xl font-bold text-[#7e3af2]">Instructors List</h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg shadow-md transition"
          onClick={() => setIsFormOpen(true)}
        >
          + Add Instructor
        </motion.button>
      </div>

      {/* Table */}
      <div className=" bg-white shadow-lg rounded-lg">
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
            {instructors.map((instructor, index) => (
              <motion.tr
                key={instructor.id}
                className="border-b hover:bg-gray-50 transition"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <td className="py-4 px-4 text-center">{index + 1}</td>
                <td className="py-4 px-6">{instructor.name}</td>

                {/* Hover Courses Popup */}
                <td
                  className="py-4 px-6 relative cursor-pointer text-blue-500 underline"
                  onMouseEnter={() => setHoveredInstructor(instructor.id)}
                  onMouseLeave={() => setHoveredInstructor(null)}
                >
                  View Courses
                  <AnimatePresence>
                    {hoveredInstructor === instructor.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-56 p-4 z-50"
                      >
                        <h3 className="text-lg font-semibold mb-2">Courses:</h3>
                        {instructor.courses && instructor.courses.length > 0 ? (
                          <ul className="list-disc pl-4 text-gray-700">
                            {instructor.courses.map((course, idx) => (
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
                <select
                    className="border rounded px-2 py-1"
                    value={instructor.status || "Active"}
                    onChange={(e) => handleStatusChange(instructor.id, e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Dropped">Dropped</option>
                    <option value="Terminated">Terminated</option>
                  </select>
                </td>

                {/* Actions */}
                <td className="py-4 px-6 flex justify-center space-x-4">
                  <Link href={`/instructors/${instructor.id}`} title="View Instructor">
                    <motion.div
                      whileHover={{ scale: 1.2, color: "#3b82f6" }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-gray-600 transition"
                    >
                      <FaEye size={20} />
                    </motion.div>
                  </Link>

                  <Link href={`/instructors/${instructor.id}/edit`} title="Edit Instructor">
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
                    title="Delete Instructor"
                    onClick={() => handleDeleteInstructor(instructor.id)}
                  >
                    <FaTrash size={20} />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-bold">Add New Instructor</h3>
            <InstructorForm onClose={() => setIsFormOpen(false)} onSubmit={(data) => {}} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default InstructorTable;
