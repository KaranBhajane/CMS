"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import BackButton from "@/app/components/BackButton";

const AddCourseForm = () => {
  const router = useRouter();
  const [isBackClicked, setIsBackClicked] = useState(false); // Track back button click

  const formik = useFormik({
    initialValues: {
      name: "",
      duration: "",
      description: "",
      fee: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Course name is required"),
      duration: Yup.string().required("Duration is required"),
      description: Yup.string().optional(),
      fee: Yup.string()
        .matches(/^\d+$/, "Fee must be a valid number")
        .required("Fee is required"),
    }),
    validateOnBlur: !isBackClicked,
    validateOnChange: !isBackClicked,
    onSubmit: (values) => {
      console.log("Course Added:", values);
    },
  });

  const handleBackClick = () => {
    setIsBackClicked(true);
    router.push("/courses"); // Redirect to courses page
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7e3af2] to-cyan-500">
        Add New Course
      </h2>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Course Name */}
          <div>
            <label className="block text-gray-700 font-semibold">Course Name</label>
            <input
              type="text"
              name="name"
              {...formik.getFieldProps("name")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e3af2] transition"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Course Duration */}
          <div>
            <label className="block text-gray-700 font-semibold">Course Duration</label>
            <input
              type="text"
              name="duration"
              {...formik.getFieldProps("duration")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e3af2] transition"
            />
            {formik.touched.duration && formik.errors.duration && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.duration}</p>
            )}
          </div>
        </div>

        {/* Course Description & Fee */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold">Course Description</label>
            <textarea
              name="description"
              {...formik.getFieldProps("description")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e3af2] transition"
              rows="2"
            ></textarea>
            {formik.touched.description && formik.errors.description && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Course Fee</label>
            <input
              type="text"
              name="fee"
              {...formik.getFieldProps("fee")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e3af2] transition"
            />
            {formik.touched.fee && formik.errors.fee && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.fee}</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            onClick={handleBackClick}
            className="px-4 py-2 bg-gray-500 text-white rounded   font-semibold transition hover:bg-gray-400 shadow-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-3 rounded-lg text-white font-semibold transition bg-gradient-to-r from-[#7e3af2] to-cyan-500 hover:opacity-90 shadow-md"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
