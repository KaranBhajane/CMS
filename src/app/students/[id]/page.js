"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft, FaUser, FaBook, FaMoneyBillWave } from "react-icons/fa";

const StudentDetails = () => {
  const { id } = useParams();
  const router = useRouter();
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//     fetch(`/api/students/${id}`)
//       .then((res) => res.json())
//       .then((data) => setStudent(data))
//       .catch((err) => console.error("Error fetching student:", err));
//   }, [id]);

const [student, setStudent] = useState({
    id: 1,
    name: "Shiv B",
    course: "React",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
    feePaid: 5000,
    totalFee: 7000,
    remainingFee: 2000,
    enrollmentDate: "2024-03-01",
  });

  if (!student) return <p className="text-center text-gray-500 mt-10">Loading...</p>;

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

      {/* Student Info */}
      <div className="border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <FaUser className="mr-2 text-blue-500" /> {student.name}
        </h2>
        <p className="text-gray-600">{student.email}</p>
        <p className="text-gray-600">{student.phone}</p>
      </div>

      {/* Course Details */}
      <div className="border-b pb-4 mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <FaBook className="mr-2 text-green-500" /> Course Enrolled
        </h3>
        <p className="text-gray-700">{student.course}</p>
      </div>

      {/* Payment Details */}
      <div>
        <h3 className="text-lg font-semibold flex items-center">
          <FaMoneyBillWave className="mr-2 text-yellow-500" /> Payment Details
        </h3>
        <ul className="mt-2 text-gray-700">
          <li><strong>Total Fees:</strong> ₹{student.totalFees}</li>
          <li><strong>Discount:</strong> ₹{student.discount}</li>
          <li><strong>Paid:</strong> ₹{student.paidFees}</li>
          <li><strong>Remaining:</strong> ₹{student.remainingFee}</li>
          <li><strong>Payment Method:</strong> {student.paymentMethod}</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default StudentDetails;
