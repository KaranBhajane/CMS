"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const CoursePayment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const studentId = searchParams.get("studentId");

  const [courses, setCourses] = useState([
    { id: 1, name: "React Course", price: 5000 },
    { id: 2, name: "Next.js Course", price: 6000 },
    { id: 3, name: "Node.js Course", price: 5500 },
  ]);

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const totalPrice = selectedCourses.reduce((sum, course) => sum + course.price, 0);
    const calculatedAmount = totalPrice - (discount ? parseInt(discount) : 0);
    setFinalAmount(calculatedAmount > 0 ? calculatedAmount : 0);
  }, [selectedCourses, discount]);

  const handleCourseSelection = (course) => {
    setSelectedCourses((prev) =>
      prev.find((c) => c.id === course.id)
        ? prev.filter((c) => c.id !== course.id)
        : [...prev, course]
    );
  };

  const validateForm = () => {
    let newErrors = {};
    if (selectedCourses.length === 0) newErrors.course = "At least one course must be selected.";
    if (discount < 0 || discount > finalAmount) newErrors.discount = "Invalid discount amount.";
    if (!paymentMethod) newErrors.paymentMethod = "Please select a payment method.";
    if ((paymentMethod === "Cheque" || paymentMethod === "Online") && !paymentDetails)
      newErrors.paymentDetails = "This field is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(`Assigning courses to Student ID: ${studentId}`, selectedCourses);
    router.push(`/students/${studentId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 text-gray-900">
      <header className="w-1/3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center py-4 text-xl font-semibold rounded-t-lg">
        Assign Courses & Payment
      </header>
      <div className="bg-white p-6 rounded-b-lg shadow-lg w-full max-w-2xl mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Select Courses */}
          <div>
            <label className="block font-medium">Select Courses</label>
            {courses.map((course) => (
              <div key={course.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCourses.some((c) => c.id === course.id)}
                  onChange={() => handleCourseSelection(course)}
                />
                <span>{course.name} - ₹{course.price}</span>
              </div>
            ))}
            {errors.course && <p className="text-red-500 text-xs">{errors.course}</p>}
          </div>

          {/* Price & Discount */}
          <div>
            <p className="font-medium">Total Price: ₹{selectedCourses.reduce((sum, c) => sum + c.price, 0)}</p>
            <label className="block font-medium">Discount</label>
            <input
              type="number"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className={`p-2 border rounded w-full ${errors.discount ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.discount && <p className="text-red-500 text-xs">{errors.discount}</p>}
            <p className="font-bold text-lg">Final Amount: ₹{finalAmount}</p>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block font-medium">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className={`p-2 border rounded w-full ${errors.paymentMethod ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select Payment Method</option>
              <option value="Cheque">Cheque</option>
              <option value="Online">Online</option>
              <option value="Cash">Cash</option>
            </select>
            {errors.paymentMethod && <p className="text-red-500 text-xs">{errors.paymentMethod}</p>}
          </div>

          {/* Payment Details for Cheque/Online */}
          {(paymentMethod === "Cheque" || paymentMethod === "Online") && (
            <div>
              <label className="block font-medium">
                {paymentMethod === "Cheque" ? "Cheque Number" : "Transaction ID"}
              </label>
              <input
                type="text"
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
                className={`p-2 border rounded w-full ${errors.paymentDetails ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.paymentDetails && <p className="text-red-500 text-xs">{errors.paymentDetails}</p>}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
            >
              Assign Courses
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoursePayment;