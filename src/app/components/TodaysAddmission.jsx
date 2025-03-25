"use client";

import { useState } from "react";

const TodaysAdmission = () => {
  const [admissions] = useState([
    { id: 1, firstName: "Karan", lastName: "B", course: "React.js", amount: "₹2500", batch: "Batch A" },
    { id: 2, firstName: "Shiv", lastName: "B", course: "Node.js", amount: "₹5000", batch: "Batch B" },
    { id: 3, firstName: "Bhaskar", lastName: "T", course: "Node.js", amount: "₹1800", batch: "Batch B" },
    { id: 4, firstName: "Amit", lastName: "Y", course: "Python", amount: "₹3000", batch: "Batch C" },
    { id: 5, firstName: "Rahul", lastName: "M", course: "Java", amount: "₹4500", batch: "Batch D" },
    { id: 6, firstName: "Sita", lastName: "K", course: "C++", amount: "₹2200", batch: "Batch E" },
  ]);

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-lg mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#7e3af2]">Today's Admissions</h2>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <div className="max-h-64 overflow-y-auto custom-scrollbar relative">
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
              {admissions.map((admission, index) => (
                <tr key={admission.id} className="border-b border-gray-400 hover:bg-gray-200 transition">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{admission.firstName}</td>
                  <td className="p-3">{admission.lastName}</td>
                  <td className="p-3">{admission.course}</td>
                  <td className="p-3">{admission.amount}</td>
                  <td className="p-3">{admission.batch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodaysAdmission;
