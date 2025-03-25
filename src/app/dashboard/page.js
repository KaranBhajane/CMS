"use client";

import PaymentTable from "../components/PaymentTable";
import { Users, BookOpen, GraduationCap, Layers, BarChart } from "lucide-react";
import TodaysAddmission from "../components/TodaysAddmission";
import BackButton from "../components/BackButton";

const Dashboard = () => {
  return (
    <div className="p-6  min-h-screen text-white">
      <div className="flex items-center justify-between mb-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7e3af2] to-cyan-500">
        Dashboard
      </h2>      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          icon={<Users size={20} />}
          title="Total Students"
          count={1200}
          color="bg-blue-500"
        />
        <DashboardCard
          icon={<GraduationCap size={20} />}
          title="Total Instructors"
          count={50}
          color="bg-green-500"
        />
        <DashboardCard
          icon={<BookOpen size={20} />}
          title="Total Courses"
          count={35}
          color="bg-yellow-500"
        />
        <DashboardCard
          icon={<Layers size={20} />}
          title="Course Batches"
          count={10}
          color="bg-purple-500"
        />
      </div>

      <PaymentTable />
      <div className="mt-8">
        <TodaysAddmission />
      </div>
      
    </div>
  );
};

const DashboardCard = ({ icon, title, count, color }) => {
  return (
    <div className="bg-gray-100 text-gray-700 p-6 rounded-xl flex items-center space-x-4 shadow-xl hover:shadow-[#7e3af2d3  ]  transition">
      <div className={`p-4 ${color} rounded-full`}>{icon}</div>
      <div>
        <h2 className="text-lg font-semibold font-blue">{title}</h2>
        <p className="text-2xl font-bold">{count}</p>
      </div>
    </div>
  );
};

export default Dashboard;
