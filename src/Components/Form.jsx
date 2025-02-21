import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Form = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post("http://localhost:5000/api/contact-form-submission", values, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          alert("Form submitted successfully!");
          resetForm(); 
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit the form. Please try again.");
      }
    },
  });

  return (
<div className="p-4 sm:p-6 w-full shadow-lg  rounded-lg">
  <h2 className="font-500 text-xl sm:text-2xl text-[#0B0B0B] mb-4 text-center">
    Get a <span className="font-700">FREE 30-minute</span> consultation
  </h2>
  <form onSubmit={formik.handleSubmit} className="space-y-4">
    <div className="pt-4">
      <label className="block text-[#0B0B0B]">Name*</label>
      <input
        type="text"
        name="name"
        placeholder="Charles David"
        className="w-full px-3 py-2 border text-sm focus:outline-none border-[#727272cc] border-b-[#0B0B0B]"
        {...formik.getFieldProps("name")}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="text-red-500 text-sm">{formik.errors.name}</div>
      ) : null}
    </div>
    <div className="pt-4">
      <label className="block text-[#0B0B0B]">Email*</label>
      <input
        type="email"
        name="email"
        placeholder="name@example.com"
        className="w-full px-3 py-2 border text-sm focus:outline-none border-[#727272cc] border-b-[#0B0B0B]"
        {...formik.getFieldProps("email")}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-500 text-sm">{formik.errors.email}</div>
      ) : null}
    </div>
    <div className="pt-4">
      <label className="block text-[#0B0B0B]">Phone Number*</label>
      <div className="flex items-center border border-[#727272cc] border-b-[#0B0B0B]">
        <span className="px-3 py-[6px] bg-gray-300 text-[#0B0B0B]">+91</span>
        <input
          type="text"
          name="phone"
          placeholder="999-999-9999"
          className="w-full px-3 py-2 text-sm focus:outline-none"
          {...formik.getFieldProps("phone")}
        />
      </div>
      {formik.touched.phone && formik.errors.phone ? (
        <div className="text-red-500 text-sm">{formik.errors.phone}</div>
      ) : null}
    </div>
    <div className="pt-4">
      <label className="block text-[#0B0B0B]">Tell Us More</label>
      <textarea
        name="message"
        placeholder="Tell More Us About Your Vision"
        className="w-full px-3 py-2 border border-[#727272cc] border-b-[#000000] text-sm focus:outline-none"
        rows="3"
        {...formik.getFieldProps("message")}
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full sm:w-40 bg-[#003ad6] text-white p-2 rounded-md"
    >
      Submit
    </button>
  </form>
</div>
  );
};

export default Form;
