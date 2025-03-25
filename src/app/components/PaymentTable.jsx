"use client";

import { useState } from "react";
import Link from "next/link";

const PaymentTable = () => {
  const [payments] = useState([
    {
      id: 1,
      firstName: "karan",
      lastName: "B",
      course: "React.js",
      amount: "₹5000",
      batch: "Batch A",
    },
    {
      id: 2,
      firstName: "piyush",
      lastName: "A",
      course: "Node.js",
      amount: "₹7000",
      batch: "Batch B",
    },
    {
      id: 3,
      firstName: "Shiv",
      lastName: "B",
      course: "Python",
      amount: "₹6500",
      batch: "Batch C",
    },
    {
      id: 4,
      firstName: "Faraz",
      lastName: "Syed",
      course: "Java",
      amount: "₹8000",
      batch: "Batch D",
    },
    {
      id: 5,
      firstName: "Bhaskar",
      lastName: "T",
      course: "C++",
      amount: "₹6000",
      batch: "Batch E",
    },
    {
      id: 6,
      firstName: "Gaurav",
      lastName: "E",
      course: "Angular",
      amount: "₹7500",
      batch: "Batch F",
    },
  ]);

  return (
    <div className=" bg-gray-100  p-6 rounded-xl shadow-lg mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[#7e3af2]">Today's Payments</h2>
        <Link href="/payment-history" className="text-blue-400 hover:underline">
          Payment History
        </Link>
      </div>

      <div className="overflow-x-auto">
        <div className="max-h-64 overflow-y-auto custom-scrollbar">
          <table className="w-full border-collapse text-black">
            <thead className="sticky top-0 z-10 border-b border-gray-400 bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
              <tr>
                <th className="p-3 text-left">Sr. No</th>
                <th className="p-3 text-left">First Name</th>
                <th className="p-3 text-left">Last Name</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Paid Amt</th>
                <th className="p-3 text-left">Batch</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr
                  key={payment.id}
                  className="border-b border-gray-400 hover:bg-gray-200 transition"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{payment.firstName}</td>
                  <td className="p-3">{payment.lastName}</td>
                  <td className="p-3">{payment.course}</td>
                  <td className="p-3">{payment.amount}</td>
                  <td className="p-3">{payment.batch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
