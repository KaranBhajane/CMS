"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/courses")}
      className="flex items-center space-x-2 px-4 py-2 border-b border-gray-400 bg-gray-500  text-white text-white rounded-lg hover:bg-gray-600 transition"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
