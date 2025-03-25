"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { useFormik } from "formik";
import * as Yup from "yup";

const OTPVerification = () => {
  const router = useRouter(); // Initialize router for navigation
  const inputRefs = useRef([]);

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: Yup.object({
      otp: Yup.string()
        .matches(/^\d{6}$/, "OTP must be exactly 6 digits")
        .required("OTP is required"),
    }),
    onSubmit: (values) => {
      console.log("OTP Submitted:", values.otp);

      // Simulate OTP verification
      if (values.otp === "123456") { // Replace with actual OTP verification logic
        router.push("/dashboard"); // Navigate to Dashboard
      } else {
        alert("Invalid OTP. Please try again.");
      }
    },
  });

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const otpArray = formik.values.otp.split("");
      otpArray[index] = value;
      formik.setFieldValue("otp", otpArray.join(""));

      // Move focus to next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-white shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] px-4 rounded-2xl w-full max-w-2xl mx-auto">
      <div className="w-full md:w-1/3 flex items-center justify-center p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#7e3af2] text-center leading-tight">
          CMS - OTP Verification
        </h1>
      </div>
      <div className="w-full md:w-2/3 max-w-md bg-white p-9 border-l border-gray-300">
        <p className="text-gray-600 text-center mb-4">
          Enter the 6-digit OTP sent to your email.
        </p>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex justify-center gap-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength={1}
                value={formik.values.otp[index] || ""}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-12 h-12 text-center text-lg font-semibold border border-[#7e3af2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e3af2]"
              />
            ))}
          </div>
          {formik.touched.otp && formik.errors.otp && (
            <p className="text-red-500 text-sm text-center">
              {formik.errors.otp}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-[#7e3af2] text-white px-4 py-2 rounded-lg hover:bg-[#7e3af2d3] transition"
          >
            Verify OTP
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Didn't receive an OTP?{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Resend
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
