"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filters, setFilters] = useState({ student: "", course: "", date: "" });

  useEffect(() => {
    // Fetch transactions from API (Replace with actual API call)
    const fetchTransactions = async () => {
      const data = [
        { id: 1, student: "Bhaskar", course: "React", amount: 500, date: "2024-03-01" },
        { id: 2, student: "Syed", course: "Node.js", amount: 300, date: "2024-03-02" },
      ];
      setTransactions(data);
      setFilteredTransactions(data);
    };

    fetchTransactions();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = transactions.filter((t) =>
      (filters.student ? t.student.toLowerCase().includes(filters.student.toLowerCase()) : true) &&
      (filters.course ? t.course.toLowerCase().includes(filters.course.toLowerCase()) : true) &&
      (filters.date ? t.date === filters.date : true)
    );

    setFilteredTransactions(filtered);
  }, [filters, transactions]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Filters */}
      <div className="mb-4 flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
        <input
          type="text"
          placeholder="Student Name"
          value={filters.student}
          onChange={(e) => setFilters({ ...filters, student: e.target.value })}
          className="border p-2 rounded w-full md:w-auto focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="text"
          placeholder="Course Name"
          value={filters.course}
          onChange={(e) => setFilters({ ...filters, course: e.target.value })}
          className="border p-2 rounded w-full md:w-auto focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="date"
          value={filters.date}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          className="border p-2 rounded w-full md:w-auto focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border  text-gray-800 shadow-sm">
          <thead>
            <tr className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
              <th className="border p-3">ID</th>
              <th className="border p-3">Student</th>
              <th className="border p-3">Course</th>
              <th className="border p-3">Amount</th>
              <th className="border p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <motion.tr
                    key={transaction.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-center odd:bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <td className="border p-3">{transaction.id}</td>
                    <td className="border p-3">{transaction.student}</td>
                    <td className="border p-3">{transaction.course}</td>
                    <td className="border p-3 text-green-600 font-semibold">${transaction.amount}</td>
                    <td className="border p-3">{transaction.date}</td>
                  </motion.tr>
                ))
              ) : (
                <motion.tr
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center"
                >
                  <td colSpan="5" className="border p-3 text-gray-500">
                    No transactions found
                  </td>
                </motion.tr>
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
