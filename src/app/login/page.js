"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      router.push("/otp_verification"); // Navigate to OTP verification page
    },
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-[90%] bg-gray-50 rounded-xl shadow-xl px-6 md:px-10 overflow-hidden w-full max-w-md  md:max-w-lg lg:max-w-7xl">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#7e3af2] text-center leading-tight">
          CMS <br /> Course Management System
        </h1>
      </div>
      <div className="border border-gray-300 h-[90%] mr-15"><hr />   </div>
      {/* Right Section */}
      <div className="w-full md:w-1/2  p-6 md:p-8 rounded-lg shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)]">
        {/* Login Form */}
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 mt-1 border border-[#7e3af2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e3af2]"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="************"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-3 py-2 mt-1 border border-[#7e3af2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e3af2]"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-[#7e3af2] text-white px-4 py-2 rounded-lg hover:bg-[#7e3af2d3] transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
