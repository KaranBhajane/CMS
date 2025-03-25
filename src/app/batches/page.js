"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const BatchTable = () => {
  // Sample data
  const [batches, setBatches] = useState([
    {
      id: 1,
      batchName: "React ",
      instructor: "Karan",
      days: "Mon, Wed, Fri",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      maxStudents: 30,
    },
    {
      id: 2,
      batchName: "Node.js ",
      instructor: "Shiv",
      days: "Tue, Thu",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      maxStudents: 25,
    },
    {
      id: 3,
      batchName: "Python ",
      instructor: "Bhaskar",
      days: "Sat, Sun",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      maxStudents: 20,
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-lg max-w-6xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#7e3af2]">Batch Management</h1>
        <button className="flex items-center hover:bg-gradient-to-r from-purple-500 to-cyan-500 text-gray-700 px-4 py-2 rounded-lg bg-gray-300 transition">
          + Add New Batch
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md capitalize">
          <thead className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
            <tr>
              <th className="p-3 text-left">Sr. No</th>
              <th className="p-3 text-left">Batch Name</th>
              <th className="p-3 text-left">Instructor</th>
              <th className="p-3 text-left">Days</th>
              <th className="p-3 text-left">Start Time</th>
              <th className="p-3 text-left">End Time</th>
              <th className="p-3 text-left">Max Students</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch, index) => (
              <tr key={batch.id} className="border-b border-gray-900 text-gray-700 hover:bg-gray-100">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{batch.batchName}</td>
                <td className="p-3">{batch.instructor}</td>
                <td className="p-3">{batch.days}</td>
                <td className="p-3">{batch.startTime}</td>
                <td className="p-3">{batch.endTime}</td>
                <td className="p-3">{batch.maxStudents}</td>
                <td className="py-4 px-6 flex justify-center space-x-6">
                  {/* View Button */}
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 10, color: "#3b82f6" }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-600 transition cursor-pointer"
                  >
                    <FaEye size={20} />
                  </motion.div>

                  {/* Edit Button */}
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: -10, color: "#22c55e" }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-600 transition cursor-pointer"
                  >
                    <FaEdit size={20} />
                  </motion.div>

                  {/* Delete Button */}
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 10, color: "#ef4444" }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-gray-600 transition cursor-pointer"
                  >
                    <FaTrash size={20} />
                  </motion.div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BatchTable;